import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]',
  standalone: true
})
export class LazyLoadDirective implements OnInit {
  @Input() appLazyLoad!: string;
  @Input() dataSrc!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = this.el.nativeElement;
          img.src = this.dataSrc;
          observer.unobserve(img);
        }
      });
    }, options);

    observer.observe(this.el.nativeElement);
  }
}