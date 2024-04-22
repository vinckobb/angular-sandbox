import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EchartComponent } from './echart/echart.component';

const routes: Routes = [
    {
        path: 'echarts',
        component: EchartComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
