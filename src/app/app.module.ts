import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebaseConfig from './firebase'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule} from  '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { UserService } from './user.service';

 
@NgModule({
 declarations: [AppComponent],
 entryComponents: [],
 imports: [BrowserModule,
   IonicModule.forRoot(),
   AppRoutingModule,
   AngularFireModule.initializeApp(firebaseConfig),
   AngularFireAuthModule,
   AngularFirestoreModule,
   AngularFireStorageModule,
   
 
 ],
 providers: [
   StatusBar,
   SplashScreen,
   { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
   UserService,
   
 ],
 bootstrap: [AppComponent]
})
export class AppModule {}
 
 
