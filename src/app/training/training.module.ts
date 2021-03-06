import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SharedModule } from './../shared/shared.module';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { StopTrainingComponent } from './current-training/stop-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { StoreModule } from '@ngrx/store';
import { trainingReducer } from './training.reducer';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        CurrentTrainingComponent,
        NewTrainingComponent,
        PastTrainingsComponent,
        StopTrainingComponent,
        TrainingComponent
    ],
    imports: [
        AngularFirestoreModule,
        SharedModule,
        TrainingRoutingModule,
        StoreModule.forFeature('training', trainingReducer),
        TranslateModule.forChild({
            extend: true
        })
    ],
    exports: [],
    // When we does not instantiate a component by selector.
    entryComponents: [StopTrainingComponent]
})
export class TrainingModule { }
