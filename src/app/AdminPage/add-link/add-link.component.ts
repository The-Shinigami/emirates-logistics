import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LinkService } from 'src/app/services/links/link.service';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {

 linkForm = new FormGroup({
    title: new FormControl(''),
    link: new FormControl('')
  })
  message = "";
  constructor(private linkService: LinkService, private router:Router) { }

  ngOnInit(): void {
  }
  async onSubmit() {
    if (await this.linkService.addLink(this.linkForm.value)) { 
      this.message = "Link added with success";
       setTimeout(() => {
         this.message = "";
         this.router.navigate(["links"]);
       }, 1500);
      this.linkForm = new FormGroup({
    title: new FormControl(''),
    link: new FormControl('')
  })
   }
  }
}
