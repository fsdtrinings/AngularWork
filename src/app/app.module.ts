import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopheaderComponent } from './nes/topheader/topheader.component';
import { AppheaderComponent } from './nse/appheader/appheader.component';
import { LinkheaderComponent } from './nse/linkheader/linkheader.component';
import { LeftpanelComponent } from './nse/leftpanel/leftpanel.component';
import { MainpanelComponent } from './nse/mainpanel/mainpanel.component';
import { RightpanelComponent } from './nse/rightpanel/rightpanel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TopheaderComponent,
    AppheaderComponent,
    LinkheaderComponent,
    LeftpanelComponent,
    MainpanelComponent,
    RightpanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
