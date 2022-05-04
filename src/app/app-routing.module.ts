import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CryptographyComponent } from './cryptography/cryptography.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { CompressionComponent } from './compression/compression.component';
import { InternetComponent } from './internet/internet.component';
import { AiComponent } from './ai/ai.component';
import { ProgrammingComponent } from './programming/programming.component';
import { SecretComponent } from './secret/secret.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

const routes: Routes = [
 { path: 'cryptography', component: CryptographyComponent, pathMatch: 'full' },
 { path: 'algorithms', component: AlgorithmsComponent, pathMatch: 'full' },
 { path: 'compression', component: CompressionComponent, pathMatch: 'full' },
 { path: 'internet', component: InternetComponent, pathMatch: 'full' },
 { path: 'ai', component: AiComponent, pathMatch: 'full' },
 { path: 'programming', component: ProgrammingComponent, pathMatch: 'full' },
 { path: 'secret/:key', component: SecretComponent, pathMatch: 'full' },
 { path: 'twoWay', component: TwoWayBindingComponent, pathMatch: 'full' },
 { path: '', component: HomeComponent, pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
