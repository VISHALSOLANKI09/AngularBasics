import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { AiComponent } from './ai/ai.component';
import { FormComponent } from './form/form.component';
import { AwesomeifyPipe } from './awesomeify.pipe';
import { AlphabeticalOrderPipe } from './alphabetical-order.pipe';
import { MagnifyDirective } from './magnify.directive';
import { NavigationComponent } from './navigation/navigation.component';
import { SubjectComponent } from './subject/subject.component';
import { HomeComponent } from './home/home.component';
import { CryptographyComponent } from './cryptography/cryptography.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { CompressionComponent } from './compression/compression.component';
import { InternetComponent } from './internet/internet.component';
import { ProgrammingComponent } from './programming/programming.component';
import { SecretComponent } from './secret/secret.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AiComponent,
    FormComponent,
    AwesomeifyPipe,
    AlphabeticalOrderPipe,
    MagnifyDirective,
    NavigationComponent,
    SubjectComponent,
    HomeComponent,
    CryptographyComponent,
    AlgorithmsComponent,
    CompressionComponent,
    InternetComponent,
    ProgrammingComponent,
    SecretComponent,
    TwoWayBindingComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
