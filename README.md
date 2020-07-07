# BurningRxjsAvra7
 
we are learning RXJS (Reactive eXtensions for JavaScript)

###### setting --base-href and --output-path in angular.json

so we can just use `ng build`

* we changed `output-path` to  `docs` in `angular.json`
* we change `baseHref` to our value in  `angular.json`
* more details [here](https://stackoverflow.com/questions/38112891/angular-2-4-5-set-base-href-dynamically/41949470#answer-41949470)
* in `serve` section do `"servePath":"/",`, see my `angular.json`


repo: `https://github.com/bresleveloper/burning-rxjs-avra7/`
[see live](https://bresleveloper.github.io/burning-rxjs-avra7/)



### comps and sessions [HW]
1. c1-example - showing `Observable`, operators like in last session
    * map
    * debounceTime
    * distinctUntilChanged
    * switchMap
2. query server with `Observable` and using "ready" with
    * `*ngIf`
    * `Subject`
    * `BehaviorSubject`
    * `async` pipe
3. `rxjs` between 2 comps using `Subject`s
    * service
    * 2 comps


