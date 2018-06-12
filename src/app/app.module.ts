import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LugarPage } from '../pages/lugar/lugar';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { TerceraPage } from '../pages/tercera/tercera';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { lugaresService } from '../services/lugares.service';
import { Camera } from '@ionic-native/camera';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';


export const firebaseConfig = {
    apiKey: "AIzaSyDRvszsKD3UnEHz38Kh5EYFCDl8qlMQZ-0",
    authDomain: "huntig-treasure.firebaseapp.com",
    databaseURL: "https://huntig-treasure.firebaseio.com",
    projectId: "huntig-treasure",
    storageBucket: "huntig-treasure.appspot.com",
    messagingSenderId: "478061181939"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage,
    AboutPage,
    TerceraPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage,
    AboutPage,
    TerceraPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    lugaresService,
    Camera,
    AuthService
  ]
})
export class AppModule {}
