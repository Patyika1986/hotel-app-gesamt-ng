import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ThirdComponent } from './third.component';




const routes: Routes = [
    {
        path: '', component: ThirdComponent
    }
];

@NgModule({
    declarations: [

    ],
    imports: [
    RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ThirdModule {}