import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

import { PostService } from './services/post.service';
import { NgbModalTestComponent } from './ngb-modal-test/ngb-modal-test.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NgbModalTestComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
