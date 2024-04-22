import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
    selector: 'app-echart-simple',
    templateUrl: './echart-simple.component.html',
    styleUrls: ['./echart-simple.component.sass'],
})
export class EchartSimpleComponent implements OnInit, OnDestroy {

    /**
     * TODO
     * -----
     * - Options
     * -- height - default 400px
     * -- type - default bar?
     * -- horizontal/vertical - checkbox? only if type bar?
     * -- category - string
     * -- value - string
     * - Relations options
     * -- height - override layout options. Higher priority
     * -- data source - list of object
     * -- category
     * -- value
     * -- echarts options - override all other settings
     */

    /**
     * option = {
  title: {
    text: 'World Population'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  dataset:
  {
    source: [
    {product: 'Matcha Latte', count: 823, score: 95.8},
    {product: 'Milk Tea', count: 235, score: 81.4},
    {product: 'Cheese Cocoa', count: 1042, score: 91.2},
    {product: 'Walnut Brownie', count: 988, score: 76.9}
]
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      type: 'bar',
      encode: {
        x: 'product',
        y: 'score'
      }
    }
  ]
};


     */

    //######################### private properties #########################

    private _resizeObserver: ResizeObserver = new ResizeObserver(() => {
        this.ngZone.run(() => {
            // this.chart?.resize();
        });
        this.chart?.resize();
    });

    //######################### protected properties - template bindings #########################

    protected chart?: echarts.ECharts;

    //######################### constructor #########################

    constructor(protected element: ElementRef<HTMLElement>,
        protected ngZone: NgZone
    ) {
        this._resizeObserver.observe(this.element.nativeElement);
    }

    ngOnInit(): void {
        this.chart = echarts.init(this.element.nativeElement);

        this.chart.setOption({
            xAxis: { 
                type: 'value',
            },
            yAxis: { 
                type: 'category',
             },
            series:
                [
                    {
                        type: 'bar',
                        data:
                            [
                                89.3,
                                57.1,
                                89.3,
                                57.1,
                                89.3,
                                57.1,
                                89.3,
                                57.1,
                            ]
                    }
                ]
        });
    }

    //######################### public methods - implementation of OnDestroy #########################

    /**
     * Called when component is destroyed
     */
    public ngOnDestroy(): void {
        this._resizeObserver.unobserve(this.element.nativeElement);

        this.chart?.dispose();
    }

}
