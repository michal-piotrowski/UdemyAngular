import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input()
  element: {type: string,
            name: string,
            content: string};
  @Input()
  name: string;

  @ContentChild('contentParagraph', {static: true})
  paragraph: ElementRef;

  @ViewChild('heading', {static: true})
  heading: ElementRef;


  constructor() { console.log('Constructor called'); }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Text content: ' + this.heading.nativeElement.textContent);
    console.log('Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log(' ##AfterContentInit## Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log(this.heading.nativeElement.textContent);
    console.log(' ##AfterViewInit## Paragraph: ' + this.paragraph.nativeElement.textContent);


  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }


}
