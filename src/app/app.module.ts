import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { 	IgxGridModule, IgxButtonGroupModule, IgxButtonModule, IgxIconModule, IgxSliderModule,
  IgxSwitchModule, IgxRippleModule, IgxExcelExporterService, IgxDropDownModule,
  IgxCheckboxModule, IgxToggleModule, IgxNavigationDrawerModule,
  IgxOverlayService, IgxNavbarModule } from 'igniteui-angular';
import { LocalService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IgxButtonModule,
    FormsModule,
    IgxGridModule,
    IgxCheckboxModule,
    IgxButtonGroupModule,
    IgxToggleModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    IgxDropDownModule,
    IgxIconModule,
    IgxSliderModule,
    IgxSwitchModule,
    IgxRippleModule,
    IgxGridModule.forRoot()
  ],
  providers: [LocalService, IgxExcelExporterService, IgxOverlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
