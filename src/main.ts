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
            apiKey: "AIzaSyCjFwCLY4DvG4Xgiu0pLnrH388ijjhVZlw",
            authDomain: "blog-app-735ec.firebaseapp.com",
            projectId: "blog-app-735ec",
            storageBucket: "blog-app-735ec.firebasestorage.app",
            messagingSenderId: "195539064393",
            appId: "1:195539064393:web:7d0be7cd9543834b251198",
            measurementId: "G-NMJESWJL00"
        })), provideStorage(() => getStorage()), provideAuth(() => getAuth()), FirestoreModule, FormsModule, ToastrModule.forRoot(), AngularEditorModule, ReactiveFormsModule),
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
