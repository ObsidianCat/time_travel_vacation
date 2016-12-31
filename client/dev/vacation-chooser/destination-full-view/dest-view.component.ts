/**
 * Created by Lula on 7/7/2016.
 */

import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationDataHandlerService } from "../core/destination-data-handler.service";
import { DestinationModel } from "./destination";
import {BookDataHandlerService} from "./book-data-handler.service";
import {AdviceDataHandlerService} from "./advice-data-handler.service";

@Component({
  selector:'destination-view',
  templateUrl:'vacation-chooser/destination-full-view/dest-view.component.html',
  styleUrls: ['vacation-chooser/styles/css/components/dest-view.component.css'],
  providers: [AdviceDataHandlerService, BookDataHandlerService],
})
export class DestViewComponent implements OnInit, OnDestroy{
  @Input() destination = new DestinationModel("","", [],[],[],[]);
  sub: any;
  isBookFormVisible = false;
  isAdviceFormVisible = false;

  constructor(
    private dataHandlerService: DestinationDataHandlerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.dataHandlerService.getDestinationById(id)
        .then(destination => {
          Object.assign(this.destination, destination);

        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  newAdviceAdded(advice){
    this.destination.advices.push(advice.data);
  }

  newBookAdded(book){
    this.destination.books.push(book.data);
    this.isBookFormVisible = false;
    console.log(this.destination);
  }

  likeDestination(btnRef){
    btnRef.disabled = true;
    this.dataHandlerService.likeDestination(this.destination._id)
      .then((data)=>{
        this.destination.likes = data;
      })
      .catch((err)=>{
        console.error(err);
      });
  }
  tagVote(voteType, tagType,tag, name){
    if(tag.alreadyVoted){return;}
    console.log(this.destination._id,voteType, tagType, tag._id);
    this.dataHandlerService.voteForTag(this.destination._id,{tagId:tag._id, tagType, voteType})
      .then((data)=>{
        // let index = this.destination[tagType].indexOf(tag);
        // this.destination[tagType][index].votes++;
        voteType == "up"?tag.votes++:tag.votes--;
        tag.alreadyVoted = true;
      })
      .catch((err)=>{
        console.error(err);
      });
  }
}
