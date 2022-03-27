import { Component, OnInit } from '@angular/core';
import { LinkService } from 'src/app/services/links/link.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
 links: any;
  load = false;
  constructor(private linkService: LinkService) {}

  ngOnInit(): void {
    this.getLinks();
  }

  async getLinks() {
    this.links = await this.linkService.getLinks();
    this.load = true;
  }
  async delete(link: any) {
    if (confirm("are you sure you want de delete the link")) {

      if (await this.linkService.deleteLink(link)) {
        this.load = false;
        await this.getLinks();
        this.load = true;
      } else {
        alert('link not deleted');
      }
    }
  }
}
