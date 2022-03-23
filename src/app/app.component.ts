import {
  AfterViewInit,
  Component, ElementRef, OnInit, ViewChild,

} from '@angular/core';
import { UserServiceService } from './services/users/user-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'HomePage';
  @ViewChild('menu') menu: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('menubutton') menubutton: ElementRef<HTMLInputElement> = {} as ElementRef;
  isAuthenticated = true;
  constructor(private userService: UserServiceService, private elementRef: ElementRef) {
  }
  ngOnInit(): void {
   }
  ngAfterViewInit() {
    this.menubutton.nativeElement.addEventListener('click', () => {
      this.menu.nativeElement.classList.toggle('hidden');
    })
    this.isAuthenticated = this.userService.isAuthenticated();
    this.navbarActive();
  }
  logOut() {
    this.userService.logOut();
    this.isAuthenticated = this.userService.isAuthenticated();
    this.navbarActive();
  }
  logIn() {
    this.isAuthenticated = this.userService.isAuthenticated();
    this.navbarActive();
  }
  navbarActive() {
    const dom: HTMLElement = this.elementRef.nativeElement;
    var btns = dom.querySelectorAll(".btn");
  
    for (var i = 0; i < btns.length; i++) {
      const btn = btns[i];
  btns[i].addEventListener("click", () => {
this.desactiveLinks(); 
    btn.classList.add("active");
   }); }
       switch (window.location.pathname) {
         case '/users':   
           this.desactiveLinks();
        dom.querySelector("#usersList")?.classList.add('active')
        break;
         case '/links':
       this.desactiveLinks();    
        dom.querySelector("#linksList")?.classList.add('active')
        break;
         case '/addUser': 
     this.desactiveLinks();      
        dom.querySelector("#addUser")?.classList.add('active')
        break;
         case '/addLink':
       this.desactiveLinks();    
        dom.querySelector("#addLink")?.classList.add('active')
        break;
    
      default:
        break;
}
    
  }

  desactiveLinks() {
    const dom: HTMLElement = this.elementRef.nativeElement;
    var btns = dom.querySelectorAll(".btn");
    for (var i = 0; i < btns.length; i++) {
      const btn = btns[i];
      btn.classList.remove("active");
    }
  }

 

}