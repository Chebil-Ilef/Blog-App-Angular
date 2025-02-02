import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirestoreModule } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, provideFirebaseApp(() => initializeApp({
            apiKey: "AIzaSyCvI7L1C8UR8qgu9THArFj23OlflcTAKqM",
            authDomain: "blog-app-a3a4f.firebaseapp.com",
            projectId: "blog-app-a3a4f",
            storageBucket: "blog-app-a3a4f.appspot.com",
            messagingSenderId: "613877446325",
            appId: "1:613877446325:web:215334c7308c637d31f0fc"
        })), provideStorage(() => getStorage()), provideAuth(() => getAuth()), FirestoreModule, FormsModule, ToastrModule.forRoot(), AngularEditorModule, ReactiveFormsModule),
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
