import { Component } from '@angular/core';

@Component({
  templateUrl:'vacation-chooser/templates/art-tags-finder.component.html',
  selector: 'art-tags-finder',
})
export class ArtTagsFinderComponent { 
  tags = ["Roman", "Greek and Hellenistic","Baroque", "Renaissance"];
}
