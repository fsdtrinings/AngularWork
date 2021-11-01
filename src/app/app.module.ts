import { MyPipe } from './MyPipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopheaderComponent } from './nes/topheader/topheader.component';
import { AppheaderComponent } from './nse/appheader/appheader.component';
import { LinkheaderComponent } from './nse/linkheader/linkheader.component';
import { LeftpanelComponent } from './nse/leftpanel/leftpanel.component';
import { MainpanelComponent } from './nse/mainpanel/mainpanel.component';
import { RightpanelComponent } from './nse/rightpanel/rightpanel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndiaVixComponent } from './nse/india-vix/india-vix.component';
import { HistoricDataComponent } from './nse/historic-data/historic-data.component';
import { RouterModule , Routes} from '@angular/router';
import { PEComponent } from './nse/pe/pe.component';


const routes: Routes = [
  { path: 'IndiaVix', component:  IndiaVixComponent},
  { path: 'HistoricData', component: HistoricDataComponent },
  { path: 'pe', component: PEComponent },
  
];



@NgModule({
  declarations: [
    AppComponent,
    TopheaderComponent,
    AppheaderComponent,
    LinkheaderComponent,
    LeftpanelComponent,
    MainpanelComponent,
    RightpanelComponent,
    MyPipe,
    IndiaVixComponent,
    HistoricDataComponent,
    PEComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
