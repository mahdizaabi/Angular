import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Post, response} from './types';
import {PostsService} from './posts.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

  loadedPosts = [];
  response = '';
  isLoading = false;
  error = null;
  private errorSubscription: Subscription;

  constructor(private postService: PostsService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
   this.errorSubscription = this.postService.error.subscribe((err)=>this.error = err)
    this.isLoading = true;
    this.fetchPosts();
    this.isLoading = false;
  }

  async onCreatePost(postData: Post) {
    // Send Http request
     this.postService.createAndStorePost(postData.title, postData.content)
    this.postService.fetchPosts().subscribe(x=> this.loadedPosts = x, (error)=>this.error = error.message)
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts()
  }

  onClearPosts() {
    this.postService.clearAllPosts().subscribe(res => {
      this.loadedPosts = [];
    }, (error)=>this.error = error)
  }

  fetchPosts() {
    this.isLoading = true;
    this.postService.fetchPosts().subscribe((posts: Post[]) => {
        this.isLoading = false;
        this.loadedPosts = posts;

    }, (error)=>{
      this.isLoading = false;
      this.error = error.message})
  }
  ngOnDestroy() {
    this.errorSubscription.unsubscribe();
  }
}
