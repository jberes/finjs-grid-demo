import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';

export const routes: Routes = [
    { path: '', redirectTo: '/grid', pathMatch: 'full' },
    { path: 'grid', component: GridComponent, data: { text: 'grid' } }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
