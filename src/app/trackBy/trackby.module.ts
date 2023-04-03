import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TrackbyComponent } from '../trackBy/trackby.component';




const routes: Routes = [
    {
        path: '', component: TrackbyComponent
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
export class TrackbyModule {}