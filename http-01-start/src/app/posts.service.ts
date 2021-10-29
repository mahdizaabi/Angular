import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Post, response} from './types';
import {catchError, map, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';

//providin: root instead of explicitly mention the dependecy on the App provider
@Injectable({providedIn: 'root'})
export class PostsService {
  private API_URL = 'https://netfxc2-default-rtdb.firebaseio.com/posts.json';
  nitfier: Subject<any> = new Subject();
  error = new Subject<string>()

  /*********************************************************************/
  constructor(private http: HttpClient) {
  }

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title, content};
    this.http.post<{ name: string }>(this.API_URL, postData,{
      observe: 'response'
    })
      .subscribe((response) => {console.log(response.body)
      }, (err) => this.error.next(err.message))
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    /*  multiple quey parameters */
    searchParams = searchParams.append('print', 'pretty')
    searchParams = searchParams.append('custom', 'key')
    return this.http.get<{ [key: string]: Post | null | undefined }>(this.API_URL, {
      headers: new HttpHeaders({'Custom-Header': 'Hello'}),
      params: new HttpParams().set('print', 'pretty')
    })
      .pipe(map((responseData: response) => {
          if (responseData)
            return Object.keys(responseData).map((key: string) => {
              return {...responseData[key], id: key}
            })
        }
      ), catchError(ee => {
        return throwError(ee)
      }))
  }

  clearAllPosts() {
  //extract the response without disturbing the normal flow of the response:
    // you'll still get the unmodified response on the callback of subscription
    return this.http.delete(this.API_URL,{
      observe:'events'
    }).pipe(
      tap(event => {
        console.log(event);
        if(event.type === HttpEventType.Sent) {
          //...
        }
        if(event.type === HttpEventType.Response) {
          console.log(event.body)
        }
      })
    )
  }
}
