import { NgModule } from '@angular/core';
import { JokesStubService } from 'src/app/jokes/services/jokes-stub.service';
import { JokesPageStubComponent } from 'src/app/jokes/jokes-page/jokes-page-stub.component';
import { JokesListStubComponent } from 'src/app/jokes/jokes-list/jokes-list-stub.component';

@NgModule({
    declarations: [
        JokesPageStubComponent,
        JokesListStubComponent
    ],
    exports: [
        JokesPageStubComponent,
        JokesListStubComponent
    ],
    providers: [
        JokesStubService
    ]
})
export class JokesTestingModule { }
