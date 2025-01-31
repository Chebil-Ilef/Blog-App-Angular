import { Injectable, inject } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';
import { BlogPost } from '../Models/BlogPost.model';
import { Firestore, collection, addDoc, collectionData, doc, docData, updateDoc, deleteDoc, where, limit, increment, getDoc, getDocs } from '@angular/fire/firestore';
import { Observable, catchError, from, map, of, switchMap, throwError } from 'rxjs';
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

  saveData(postData: BlogPost): Observable<any> { // Make saveData return an Observable
    let blogPostCollection = collection(this.firestore, 'blogposts');
    return from(addDoc(blogPostCollection, postData)).pipe( // Use from to convert the Promise
      switchMap(docRef => { // Use switchMap to handle the docRef and return a new observable if needed. If not, you can just return of(docRef)
        this.toastr.success("Blog Post Added Successfully!");
        this.router.navigate(['/dashboard/posts']);
        return of(docRef); // Return the document reference if needed or just an empty observable of()
      }),
      catchError(err => {
        console.error(err);
        this.toastr.error("An error has occurred while saving the data!");
        return throwError(() => err);
      })
    );
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
  updateData(id: string, editedData: BlogPost): Observable<any> {
    let docReference = doc(this.firestore, 'blogposts', id);
    return from(updateDoc(docReference, { ...editedData })).pipe( // Use from()
      switchMap(() => { // Use switchMap to execute navigation after the update
        this.toastr.success("Blog Post Updated Successfully!");
        this.router.navigate(['/dashboard/posts']);
        return of(null); // Return an Observable (even if void)
      }),
      catchError((err) => {
        this.toastr.error(err.message);
        return throwError(() => err); // Re-throw the error
      })
    );
  }
  
  deleteData(id: string): Observable<any> {
    let docReference = doc(this.firestore, 'blogposts', id);
    return from(deleteDoc(docReference)).pipe( // Use from()
      switchMap(() => {
        this.toastr.success("Post Deleted Successfully!");
        return of(null); // Return an Observable
      }),
      catchError((err) => {
        this.toastr.error(err.message);
        return throwError(() => err);
      })
    );
  }
  
  markFeatured(id: string, featuredData: any): Observable<any> {
    let docReference = doc(this.firestore, 'blogposts', id);
    return from(updateDoc(docReference, { ...featuredData })).pipe( // Use from()
      switchMap(() => {
        this.toastr.info("Featured status updated!");
        return of(null); // Return an Observable
      }),
      catchError((err) => {
        this.toastr.error(err.message);
        return throwError(() => err);
      })
    );
  }

  getFeaturedPosts(){
    let catCollection = collection(this.firestore, 'blogposts')
    let q = query(catCollection, where('isFeatured', '==', true), limit(4))
    return collectionData(q, { idField: 'id' }) as Observable<BlogPostWithId[]>;
  }

  getLatestPosts(){
    let catCollection = collection(this.firestore, 'blogposts')
    let q = query(catCollection, orderBy('createdAt', 'desc'), limit(6))
    return collectionData(q, { idField: 'id' }) as Observable<BlogPostWithId[]>;
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
  countViews(id: string): Observable<void> {
    let docReference = doc(this.firestore,'blogposts',id);
    return from(updateDoc(docReference, { views: increment(1) })).pipe(
      catchError(error => {
        console.error("Error incrementing views:", error);
        return throwError(() => error); // Re-throw the error as an Observable error
      })
    );
  }
}