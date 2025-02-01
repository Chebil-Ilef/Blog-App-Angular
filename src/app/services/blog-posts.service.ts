import { Injectable, inject } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';
import { BlogPost } from '../Models/BlogPost.model';
import { Firestore, collection, addDoc, collectionData, doc, docData, updateDoc,DocumentSnapshot, deleteDoc,startAfter, where, limit, increment, getDoc, getDocs } from '@angular/fire/firestore';
import { Observable, from, map,catchError,switchMap } from 'rxjs';
import { BlogPostWithId } from '../Models/BlogPostWithId.model';
import { Router } from '@angular/router';
import { orderBy, query } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {

  constructor() { }

  private readonly storage: Storage = inject(Storage);
  private toastr : ToastrService = inject(ToastrService);
  private firestore : Firestore = inject(Firestore);
  private router : Router = inject(Router)

  addPost(input: any, postData : BlogPost, formStatus : string, id : string) {
    const filePath = `blogPostsImages/${Date.now()}`
    const storageRef = ref(this.storage, filePath);
    uploadBytes(storageRef, input).then(()=>{
      getDownloadURL(storageRef).then((URL)=>{
        postData.postImg = URL       

        if(formStatus == "Edit"){
          this.updateData(id, postData)
        }else{
          this.saveData(postData)    
        }
      }).catch((err)=>{
        console.log(err);

        this.toastr.error("An error has occured while getting the image URL !")
      })
    }).catch((err)=>{
      this.toastr.error("An error has occured while uploading the image !")
    })
  }

  saveData(postData : BlogPost){
    let blogPostCollection = collection(this.firestore, 'blogposts')
    addDoc(blogPostCollection, postData).then(
      docRef =>{
        this.toastr.success("Blog Post Added Successfully !")
        this.router.navigate(['/dashboard/posts'])
      }
    ).catch(
      err => {
        console.log(err);
        this.toastr.error("An error has occured while saving the data !")
      }
    )
  }

  loadData(){
    let catCollection = collection(this.firestore, 'blogposts')
    return collectionData(catCollection, { idField: 'id' }) as Observable<BlogPostWithId[]>;
  }

  loadOneData(id:string){
    let catCollection = collection(this.firestore, 'blogposts')
    let docRef = doc(catCollection, id);
    return docData(docRef, { idField: 'id' }) as Observable<BlogPostWithId>
  }

  loadDataWithPostLink(postLink:string){
    let catCollection = collection(this.firestore, 'blogposts')
    let q = query(catCollection, where('postLink', '==', postLink))
    return from(getDocs(q)).pipe(
      map((querySnapshot) => {
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data()
          return { id: doc.id ,...data } as BlogPostWithId;
        } else {
          return undefined;
        }
      })
    )
  }
  updateData(id : string, editedData : BlogPost){
    let docReference = doc(this.firestore,'blogposts',id)    
    updateDoc(docReference, {
      ...editedData
    }).then( docRef =>{
      this.toastr.success("Blog Post Updated Successfully !")
      this.router.navigate(['/dashboard/posts'])
    }).catch(
      err => {
        this.toastr.error(err.message)
      }
    )
  }

  deleteData(id : string){
    let docReference = doc(this.firestore,'blogposts',id)
    deleteDoc(docReference).then( docRef =>{
      this.toastr.success("Post Deleted Successfully !")
    }).catch(
      err => {
        this.toastr.error(err.message)
      }
    )
  }

  markFeatured(id : string, featuredData : any){
    let docReference = doc(this.firestore,'blogposts',id)    
    updateDoc(docReference, {
      ...featuredData
    }).then( docRef =>{
      this.toastr.info("Featured status updated !")
    }).catch(
      err => {
        this.toastr.error(err.message)
      }
    )
  }

  getFeaturedPosts(){
    let catCollection = collection(this.firestore, 'blogposts')
    let q = query(catCollection, where('isFeatured', '==', true), limit(4))
    return collectionData(q, { idField: 'id' }) as Observable<BlogPostWithId[]>;
  }

  getLatestPosts(limitCount: number, lastVisibleDoc: DocumentSnapshot | null): Observable<{ posts: BlogPostWithId[]; total: number; lastVisible: DocumentSnapshot | null }> {
    const catCollection = collection(this.firestore, 'blogposts');
  
    let q = query(
      catCollection,
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );
  
    // Add startAfter if lastVisibleDoc is provided
    if (lastVisibleDoc) {
      q = query(q, startAfter(lastVisibleDoc));
    }
  
    // Convert Firestore query to Observable
    return from(getDocs(q)).pipe(
      switchMap((querySnapshot) => {
        const posts: BlogPostWithId[] = [];
        let lastVisible: DocumentSnapshot | null = null;
  
        querySnapshot.forEach((doc) => {
          posts.push({ id: doc.id, ...doc.data() } as BlogPostWithId);
        });
  
        // Get the last visible document for pagination
        if (querySnapshot.docs.length > 0) {
          lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        }
  
        // Fetch the total number of posts
        return from(getDocs(catCollection)).pipe(
          map((totalSnapshot) => ({
            posts,
            total: totalSnapshot.size,
            lastVisible,
          }))
        );
      }),
      catchError((error) => {
        console.error('Error fetching posts:', error);
        throw error; // Re-throw the error to be handled by the caller
      })
    );
  }
  loadCategoryPosts(categoryId : string){
    let catCollection = collection(this.firestore, 'blogposts')
    let q = query(catCollection, where('category.categoryId', '==', categoryId))
    return collectionData(q, { idField: 'id' }) as Observable<BlogPostWithId[]>;
  }
  loadSimilarPosts(categoryId : string){
    let catCollection = collection(this.firestore, 'blogposts')
    let q = query(catCollection, where('category.categoryId', '==', categoryId), limit(3))
    return collectionData(q, { idField: 'id' }) as Observable<BlogPostWithId[]>;
  }
  countViews(id : string){
    let docReference = doc(this.firestore,'blogposts',id)      
    updateDoc(docReference, {
      views : increment(1) 
    }).then( docRef =>{
      
    })
  }
}