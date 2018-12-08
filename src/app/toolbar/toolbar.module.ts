import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from 'src/app/toolbar/toolbar/toolbar.component';

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
    ],
    declarations: [
        ToolbarComponent
    ],
    exports: [
        ToolbarComponent
    ]
})
export class ToolbarModule { }
