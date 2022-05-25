(self["webpackChunkblockexplorer"] = self["webpackChunkblockexplorer"] || []).push([["main"],{

/***/ 1036:
/*!**********************************************!*\
  !*** ./src/app/aliases/aliases.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AliasesComponent": () => (/* binding */ AliasesComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/subscription-tracker/subscription-tracker */ 8083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ 5876);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ 3694);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.component */ 6392);
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/dialog.component */ 5029);










function AliasesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { hide_heading: a0 }; };
function AliasesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Aliases ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AliasesComponent_div_1_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.searchAlias(); })("keyup", function AliasesComponent_div_1_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.searchAlias(); })("ngModelChange", function AliasesComponent_div_1_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.searchValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "app-search", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("isVisible", function AliasesComponent_div_1_Template_app_search_isVisible_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.onIsVisible($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AliasesComponent_div_1_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.searchAlias(); })("keyup", function AliasesComponent_div_1_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.searchAlias(); })("ngModelChange", function AliasesComponent_div_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.searchValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, ctx_r1.searchIsOpen === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.searchValue);
} }
function AliasesComponent_div_2_thead_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "thead")(1, "tr")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
function AliasesComponent_div_2_tr_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AliasesComponent_div_2_tr_4_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const alias_r18 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r19.highlightedText === true || ctx_r19.setAlias(alias_r18); })("click", function AliasesComponent_div_2_tr_4_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r21.highlightedText === true || (ctx_r21.showDialog = !ctx_r21.showDialog); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td")(2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td")(5, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const alias_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](alias_r18.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](alias_r18.address);
} }
function AliasesComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No data");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AliasesComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Pages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AliasesComponent_div_2_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r22.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "svg", 40)(6, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AliasesComponent_div_2_div_6_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r24.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "svg", 40)(10, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function AliasesComponent_div_2_div_6_Template_input_input_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r25.currentPage = $event.target.value; })("change", function AliasesComponent_div_2_div_6_Template_input_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r26.onChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 45)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Items on page:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function AliasesComponent_div_2_div_6_Template_input_input_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r27.count = $event.target.value; })("change", function AliasesComponent_div_2_div_6_Template_input_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r28.onChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r17.currentPage <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r17.Aliases.length < ctx_r17.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r17.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r17.count);
} }
function AliasesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseup", function AliasesComponent_div_2_Template_div_mouseup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.selectText(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AliasesComponent_div_2_thead_2_Template, 6, 0, "thead", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AliasesComponent_div_2_tr_4_Template, 7, 2, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AliasesComponent_div_2_div_5_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AliasesComponent_div_2_div_6_Template, 17, 4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.Aliases.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.Aliases);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.Aliases.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.visiblePagination === true && ctx_r2.Aliases.length !== 0);
} }
function AliasesComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Address copied to clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AliasesComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47)(1, "div", 7)(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Comment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.currentAlias == null ? null : ctx_r4.currentAlias.comment);
} }
function AliasesComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48)(1, "div", 7)(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Tracking key:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.currentAlias == null ? null : ctx_r5.currentAlias.tracking_key);
} }
class AliasesComponent extends app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__.SubscriptionTracker {
    constructor(httpService, cookieService, route, ngZone, mobileNavState) {
        super();
        this.httpService = httpService;
        this.cookieService = cookieService;
        this.route = route;
        this.ngZone = ngZone;
        this.mobileNavState = mobileNavState;
        this.showDialog = false;
        this.lastSendAliases = {
            offset: 0,
            count: 0,
            search: ''
        };
        this.searchIsOpen = false;
        this.setAlias = (alias) => {
            this.currentAlias = alias;
            window.location.hash = '#modalOpen';
            this.trackingKey = !(this.currentAlias.tracking_key.replace(/\s/g, '') === '');
            this.comment = !(this.currentAlias.comment.replace(/\s/g, '') === '');
        };
        this.maxCount = 1000;
        this.visiblePagination = false;
        this.copiedClipboard = false;
        this.appSearchShow = true;
        this.selectionText = '';
        this.highlightedText = false;
        this.navIsOpen = false;
    }
    onIsVisible($event) {
        this.searchIsOpen = $event;
    }
    ngOnInit() {
        this.currentPage = 1;
        this.count = 20;
        this.offset = 0;
        this.search = '';
        this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe((params) => {
            this.search = params.id;
        });
        if (this.cookieService.get('setCountAliasesCookie')) {
            this.count = parseInt(this.cookieService.get('setCountAliasesCookie'), 10);
        }
        this.onChange();
    }
    onChange() {
        if (this.count > this.maxCount) {
            this.count = this.maxCount;
        }
        if (!this.count) {
            this.count = 1;
        }
        this.limitList = +this.count;
        this.cookieService.set('setCountAliasesCookie', this.limitList);
        this.offset = (this.currentPage - 1) * this.count;
        if (this.lastSendAliases.offset !== this.offset ||
            this.lastSendAliases.count !== this.count ||
            this.lastSendAliases.search !== this.search) {
            this.lastSendAliases.offset = this.offset;
            this.lastSendAliases.count = this.count;
            this.lastSendAliases.search = this.search;
            this.loader = true;
            this.httpService
                .getAliases(this.offset, this.count, this.search)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
                .subscribe({
                next: (data) => {
                    this.Aliases = data;
                },
                error: (err) => {
                    console.log('getAliases', err);
                },
                complete: () => {
                    this.loader = false;
                    this.visiblePagination = true;
                }
            });
        }
        this.mobileNavState.change.subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen;
        });
    }
    nextPage() {
        if (this.Aliases.length >= +this.count) {
            this.currentPage++;
            this.onChange();
        }
    }
    prevPage() {
        if (this.currentPage - 1 > 0) {
            this.currentPage--;
            this.onChange();
        }
    }
    selectText() {
        if (window.getSelection) {
            this.selectionText = window.getSelection().toString();
        }
        this.selectionText.replace(/\s/g, '') === ''
            ? (this.highlightedText = false)
            : (this.highlightedText = true);
    }
    copyAddress() {
        window
            .getSelection()
            .selectAllChildren(document.getElementById('address-text'));
        document.execCommand('copy');
        this.copiedClipboard = true;
        this.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
                this.ngZone.run(() => {
                    this.copiedClipboard = false;
                });
            }, 2000);
        });
    }
    searchAlias() {
        this.currentPage = 1;
        this.search = this.searchValue.replace(/\s/g, '');
        this.onChange();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
AliasesComponent.ɵfac = function AliasesComponent_Factory(t) { return new (t || AliasesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.MobileNavState)); };
AliasesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AliasesComponent, selectors: [["app-aliases"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 30, vars: 12, consts: [["class", "overlay", 4, "ngIf"], ["class", "top_box aliases_top_box", 4, "ngIf"], ["class", "wrapper_table", 3, "mouseup", 4, "ngIf"], [3, "visible", "visibleChange"], [1, "dialog_title"], [1, "wrap_content"], [1, "address"], [1, "title_value"], [1, "title"], ["type", "text", "id", "address-text", 1, "value"], ["class", "address_copied_to_clipboard", 4, "ngIf"], ["type", "button", 1, "btn_copy_address", 3, "click"], ["class", "comment", 4, "ngIf"], ["class", "tracking_key", 4, "ngIf"], [1, "height"], [1, "value"], [1, "transact"], [1, "value", 3, "routerLink"], [1, "overlay"], [1, "loader"], [1, "top_box", "aliases_top_box"], [1, "row_heading_search"], [1, "left_box"], [1, "mobile_heading", 3, "ngClass"], ["type", "text", "placeholder", "name / address / comment", 1, "alias_input_search", "desktop", 3, "ngModel", "change", "keyup", "ngModelChange"], [3, "isVisible"], ["type", "text", "placeholder", "name / address / comment", 1, "alias_input_search", "mobile", 3, "ngModel", "change", "keyup", "ngModelChange"], [1, "wrapper_table", 3, "mouseup"], [1, "table_aliases"], [4, "ngIf"], [3, "click", 4, "ngFor", "ngForOf"], ["class", "no_data", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [3, "click"], [1, "alias-name"], [1, "alias-address"], [1, "no_data"], [1, "pagination"], [1, "left_position"], ["type", "button", 1, "prev_btn", 3, "disabled", "click"], ["x", "0px", "y", "0px", "viewBox", "0 0 477.175 477.175"], ["d", "M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\n              c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"], ["type", "button", 1, "next_btn", 3, "disabled", "click"], ["d", "M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5\n              c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z\n              "], ["type", "text", 3, "value", "input", "change"], [1, "right_position"], [1, "address_copied_to_clipboard"], [1, "comment"], [1, "tracking_key"]], template: function AliasesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AliasesComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AliasesComponent_div_1_Template, 8, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AliasesComponent_div_2_Template, 7, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "app-dialog", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibleChange", function AliasesComponent_Template_app_dialog_visibleChange_3_listener($event) { return ctx.showDialog = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, AliasesComponent_span_13_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AliasesComponent_Template_button_click_14_listener() { return ctx.copyAddress(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Copy address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, AliasesComponent_div_16_Template, 6, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, AliasesComponent_div_17_Template, 6, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 14)(19, "div", 7)(20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Height:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 16)(25, "div", 7)(26, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Transaction:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loader === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.navIsOpen === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Aliases);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.showDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("@", ctx.currentAlias == null ? null : ctx.currentAlias.alias, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.currentAlias == null ? null : ctx.currentAlias.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.copiedClipboard === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.comment === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.trackingKey === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.currentAlias == null ? null : ctx.currentAlias.block);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/transaction/", ctx.currentAlias == null ? null : ctx.currentAlias.transact, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.currentAlias == null ? null : ctx.currentAlias.transact);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DialogComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref], styles: [".wrapper_table[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n@media (max-width: 761px) {\n  .wrapper_table[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n}\n@media (max-width: 761px) {\n  .wrapper_table[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n    min-width: 880px;\n  }\n}\n.table_aliases[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.table_aliases[_ngcontent-%COMP%]   .alias-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n.table_aliases[_ngcontent-%COMP%]   .alias-address[_ngcontent-%COMP%] {\n  font-size: 13px;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n@media (max-width: 761px) {\n  .table_aliases[_ngcontent-%COMP%] {\n    min-width: 700px;\n  }\n}\n.table_aliases[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-top: none;\n}\n.table_aliases[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.dialog_title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 26px;\n  font-weight: 300;\n  padding-bottom: 38px;\n}\n.wrap_content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.wrap_content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .title_value[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  padding: 10px 0;\n  position: relative;\n  width: 100%;\n}\n.wrap_content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .title_value[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 95px;\n  flex-shrink: 0;\n  color: #fff;\n}\n.wrap_content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .title_value[_ngcontent-%COMP%]    > .value[_ngcontent-%COMP%] {\n  display: inline-flex;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 300;\n  border: none;\n  flex-basis: 100%;\n  line-height: 1.5;\n  pointer-events: none;\n  width: 100%;\n  white-space: normal;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-all;\n  line-break: strict;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n.wrap_content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .title_value[_ngcontent-%COMP%]   .address_copied_to_clipboard[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 90%;\n  right: 0;\n  width: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  text-transform: uppercase;\n  border-radius: 10px;\n  padding: 5px 15px;\n  color: #ff5252;\n}\n.wrap_content[_ngcontent-%COMP%]    > div.address[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media (max-width: 1170px) {\n  .wrap_content[_ngcontent-%COMP%]    > div.address[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    border-bottom: 1px solid #e0e4e2;\n    padding-bottom: 30px;\n  }\n}\n.wrap_content[_ngcontent-%COMP%]    > div.address[_ngcontent-%COMP%]   .title_value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  border-bottom: 1px solid #e0e4e2;\n  flex-basis: 100%;\n  width: calc(100% + 140px);\n}\n@media (max-width: 1170px) {\n  .wrap_content[_ngcontent-%COMP%]    > div.address[_ngcontent-%COMP%]   .title_value[_ngcontent-%COMP%] {\n    border-color: transparent;\n    align-items: baseline;\n    margin-bottom: 15px;\n  }\n}\n.wrap_content[_ngcontent-%COMP%]    > div.address[_ngcontent-%COMP%]   .title_value[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  width: 780px;\n}\n@media (max-width: 991px) {\n  .wrap_content[_ngcontent-%COMP%]    > div.address[_ngcontent-%COMP%]   .title_value[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n    white-space: normal;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    word-break: break-all;\n    line-break: strict;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n    width: 100%;\n  }\n}\n.wrap_content[_ngcontent-%COMP%]    > div.address[_ngcontent-%COMP%]   button.btn_copy_address[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 136px;\n  height: 33px;\n  flex-shrink: 0;\n  margin-left: 27px;\n  border: 1px solid transparent;\n  background: linear-gradient(to bottom, #212f6c, #212f6c);\n  border-radius: 10px;\n  color: #fff;\n  font-size: 16px;\n  transition: 0.2s;\n  padding: 0 15px;\n  white-space: nowrap;\n}\n@media (max-width: 1170px) {\n  .wrap_content[_ngcontent-%COMP%]    > div.address[_ngcontent-%COMP%]   button.btn_copy_address[_ngcontent-%COMP%] {\n    margin-left: 95px;\n  }\n}\n.wrap_content[_ngcontent-%COMP%]    > div.address[_ngcontent-%COMP%]   button.btn_copy_address[_ngcontent-%COMP%]:hover, .wrap_content[_ngcontent-%COMP%]    > div.address[_ngcontent-%COMP%]   button.btn_copy_address[_ngcontent-%COMP%]:focus {\n  background: linear-gradient(to bottom, #212f6c, #26367a);\n}\n.wrap_content[_ngcontent-%COMP%]    > div.comment[_ngcontent-%COMP%], .wrap_content[_ngcontent-%COMP%]    > div.tracking_key[_ngcontent-%COMP%], .wrap_content[_ngcontent-%COMP%]    > div.height[_ngcontent-%COMP%], .wrap_content[_ngcontent-%COMP%]    > div.transact[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e0e4e2;\n}\n.wrap_content[_ngcontent-%COMP%]    > div.comment[_ngcontent-%COMP%]   .title_value[_ngcontent-%COMP%], .wrap_content[_ngcontent-%COMP%]    > div.tracking_key[_ngcontent-%COMP%]   .title_value[_ngcontent-%COMP%], .wrap_content[_ngcontent-%COMP%]    > div.height[_ngcontent-%COMP%]   .title_value[_ngcontent-%COMP%], .wrap_content[_ngcontent-%COMP%]    > div.transact[_ngcontent-%COMP%]   .title_value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n}\n.wrap_content[_ngcontent-%COMP%]    > div.transact[_ngcontent-%COMP%]   .title_value[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.wrap_content[_ngcontent-%COMP%]    > div.transact[_ngcontent-%COMP%]   .title_value[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  color: #68a1ff;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.wrap_content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wrap_content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child   .title_value[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.alias_input_search[_ngcontent-%COMP%] {\n  background-color: rgba(35, 78, 226, 0.1);\n}\n.alias_input_search[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #9eaacc;\n}\n.alias_input_search[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #9eaacc;\n  opacity: 1;\n}\n.alias_input_search[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #9eaacc;\n}\n.alias_input_search.desktop[_ngcontent-%COMP%] {\n  display: flex;\n  width: 320px;\n}\n@media (max-width: 761px) {\n  .alias_input_search.desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.alias_input_search.mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 761px) {\n  .alias_input_search.mobile[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsaWFzZXMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi9hc3NldHMvc3R5bGVzL2Jhc2UvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQUhKO0FDMEVJO0VEekVKO0lBSVEsZ0JBQUE7RUFETjtBQUNGO0FDcUVJO0VEbkVBO0lBRVEsZ0JBQUE7RUFBVjtBQUNGO0FBS1E7RUFDSSxlQUFBO0FBRlo7QUFLSTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUFIUjtBQUtJO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQUhSO0FDZ0RJO0VEN0RKO0lBbUJRLGdCQUFBO0VBRk47QUFDRjtBQUlRO0VBQ0ksZ0JBQUE7QUFGWjtBQU1RO0VBQ0ksZUFBQTtBQUpaO0FBU0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFOSjtBQVNJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFOUjtBQU9RO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBTFo7QUFNWTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSmhCO0FBTVk7RUFDSSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQzFFWixtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0FEdUVKO0FBRFk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFHaEI7QUFDUTtFQUNJLGFBQUE7QUFDWjtBQ3BDSTtFRGtDSTtJQUdRLGVBQUE7SUFDQSxnQ0FBQTtJQUNBLG9CQUFBO0VBR2Q7QUFDRjtBQUZZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUloQjtBQ25ESTtFRHlDUTtJQVNRLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQUtsQjtBQUNGO0FBSmdCO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFNcEI7QUN4REk7RURnRFk7SUNqSFosbUJBQUE7SUFDQSx5QkFBQTtJQUNBLHFCQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtJQUNBLHFCQUFBO0lBRUEsYUFBQTtJRCtHb0IsV0FBQTtFQWV0QjtBQUNGO0FBWlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3REFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWNoQjtBQzVGSTtFRCtEUTtJQWlCUSxpQkFBQTtFQWdCbEI7QUFDRjtBQWZnQjtFQUVJLHdEQUFBO0FBZ0JwQjtBQVpRO0VBSUksZ0NBQUE7QUFXWjtBQVZZO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FBWWhCO0FBUlk7RUFDSSxPQUFBO0VBQ0EsWUFBQTtBQVVoQjtBQVRnQjtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUN6S2hCLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRHFMSjtBQVRRO0VBQ0ksbUJBQUE7QUFXWjtBQVZZO0VBQ0ksbUJBQUE7QUFZaEI7QUFOQTtFQUNJLHdDQUFBO0FBU0o7QUFSSTtFQUNJLGNBQUE7QUFVUjtBQVJJO0VBQ0ksY0FBQTtFQUNBLFVBQUE7QUFVUjtBQVJJO0VBQ0ksY0FBQTtBQVVSO0FBUkk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQVVSO0FDbklJO0VEdUhBO0lBSVEsYUFBQTtFQVlWO0FBQ0Y7QUFWSTtFQUNJLGFBQUE7QUFZUjtBQzNJSTtFRDhIQTtJQUdRLGFBQUE7RUFjVjtBQUNGIiwiZmlsZSI6ImFsaWFzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzL2Jhc2UvbWl4aW5zJztcbjpob3N0IHtcbn1cblxuLndyYXBwZXJfdGFibGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBAaW5jbHVkZSBtYXg3NjEge1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIH1cbiAgICAucGFnaW5hdGlvbiB7XG4gICAgICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDg4MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLnRhYmxlX2FsaWFzZXMge1xuICAgIHRoZWFkIHtcbiAgICAgICAgdGgge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5hbGlhcy1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAgICAgLW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgfVxuICAgIC5hbGlhcy1hZGRyZXNzIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAgICAgLW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgfVxuICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgIG1pbi13aWR0aDogNzAwcHg7XG4gICAgfVxuICAgIHRoZWFkIHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0Ym9keSB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRpYWxvZ190aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcGFkZGluZy1ib3R0b206IDM4cHg7XG59XG4ud3JhcF9jb250ZW50IHtcbiAgICA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLnRpdGxlX3ZhbHVlIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgID4gLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTVweDtcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgID4gLnZhbHVlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRleHRXcmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFkZHJlc3NfY29waWVkX3RvX2NsaXBib2FyZCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogOTAlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNTI1MjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYWRkcmVzcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgQGluY2x1ZGUgbWF4MTE3MCB7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlNGUyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxlX3ZhbHVlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlNGUyO1xuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDE0MHB4KTtcblxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDExNzAge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC52YWx1ZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3ODBweDtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4OTkxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRleHRXcmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24uYnRuX2NvcHlfYWRkcmVzcyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMzZweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI3cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzIxMmY2YywgIzIxMmY2Yyk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXgxMTcwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDk1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyMTJmNmMsICMyNjM2N2EpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmNvbW1lbnQsXG4gICAgICAgICYudHJhY2tpbmdfa2V5LFxuICAgICAgICAmLmhlaWdodCxcbiAgICAgICAgJi50cmFuc2FjdCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTRlMjtcbiAgICAgICAgICAgIC50aXRsZV92YWx1ZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi50cmFuc2FjdCB7XG4gICAgICAgICAgICAudGl0bGVfdmFsdWUge1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIC52YWx1ZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY4YTFmZjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRleHQtdHJ1bmNhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgLnRpdGxlX3ZhbHVlIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWxpYXNfaW5wdXRfc2VhcmNoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMyMzRlZTIsIDAuMSk7XG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjOWVhYWNjO1xuICAgIH1cbiAgICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICM5ZWFhY2M7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgICY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjOWVhYWNjO1xuICAgIH1cbiAgICAmLmRlc2t0b3Age1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgICYubW9iaWxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgQGluY2x1ZGUgbWF4NzYxIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAbWl4aW4gdGV4dC10cnVuY2F0ZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1peGluIHRleHRXcmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBsaW5lLWJyZWFrOiBzdHJpY3Q7XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG59XG5AbWl4aW4gY292ZXJCb3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5AbWl4aW4gYWJzKCR0b3A6IGF1dG8sICRyaWdodDogYXV0bywgJGJvdHRvbTogYXV0bywgJGxlZnQ6IGF1dG8pIHtcbiAgICB0b3A6ICR0b3A7XG4gICAgcmlnaHQ6ICRyaWdodDtcbiAgICBib3R0b206ICRib3R0b207XG4gICAgbGVmdDogJGxlZnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuQG1peGluIGNvdmVySW1nIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cbkBtaXhpbiB2YWxpbmdCb3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5AbWl4aW4gdW5TZWxlY3Qge1xuICAgIC13ZWJraXQtdG91Y2gtY29sbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbkBtaXhpbiBjbGVhcmZpeCB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuQG1peGluIG1heDExOTkge1xuICAgIC8vIG1ha2V0IDExNzFcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtYXgxMTcwIHtcbiAgICAvLyBtYWtldHMgOTkyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNzBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbWF4OTkxIHtcbiAgICAvLyBtYWtldHMgNzYyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtYXg3NjEge1xuICAgIC8vIG1ha2V0cyA1NzZcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzYxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1heDU3NSB7XG4gICAgLy8gbWFrZXRzIDQwMFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbW9iaWxlIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIHRyaWFuZ2xlVXAoJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXI6ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206ICRoIHNvbGlkICRjb2xvcjtcbn1cbkBtaXhpbiB0cmlhbmdsZURvd24oJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wOiAkaCBzb2xpZCAkY29sb3I7XG59XG5AbWl4aW4gdHJpYW5nbGVMZWZ0KCR3OiAyMHB4LCAkaDogMjBweCwgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAkaCBzb2xpZCAkY29sb3I7XG59XG5AbWl4aW4gdHJpYW5nbGVSaWdodCgkdzogMjBweCwgJGg6IDIwcHgsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAkaCBzb2xpZCAkY29sb3I7XG59XG5AbWl4aW4gdHJpYW5nbGVUb3BMZWZ0KCR3OiAyMHB4LCAkaDogMjBweCwgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogJHcgc29saWQgJGNvbG9yO1xuICAgIGJvcmRlci1yaWdodDogJGggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5AbWl4aW4gcGFyYWxsZWxvZ3JhbSgkdzogMTUwcHgsICRoOiAxMDBweCwgJHNrZXc6IDIwZGVnLCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAkdztcbiAgICBoZWlnaHQ6ICRoO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KCRza2V3KTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2tldygkc2tldyk7XG4gICAgLW8tdHJhbnNmb3JtOiBza2V3KCRza2V3KTtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4gICAgPiBzcGFuLFxuICAgIGEsXG4gICAgYWRkcmVzcyB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0kc2tldyk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBza2V3KC0kc2tldyk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogc2tldygtJHNrZXcpO1xuICAgIH1cbn1cbkBtaXhpbiBib3R0b21MaW5lKCRoOiA4cHgsICRjb2xvcjogIzAwYjliZikge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAkaDtcbn1cbkBtaXhpbiBjZW50ZXItYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbkBtaXhpbiBpY29DZW50ZXIge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbkBtaXhpbiBwc2V1ZG8oJGRpc3BsYXk6IGJsb2NrLCAkcG9zOiBhYnNvbHV0ZSwgJGNvbnRlbnQ6ICcnKSB7XG4gICAgY29udGVudDogJGNvbnRlbnQ7XG4gICAgZGlzcGxheTogJGRpc3BsYXk7XG4gICAgcG9zaXRpb246ICRwb3M7XG59XG5AbWl4aW4gYmFydGJsb2NrIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzIzNGVlMiwgMC4xKTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5458:
/*!********************************************************************!*\
  !*** ./src/app/alt-blocks-details/alt-blocks-details.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AltBlocksDetailsComponent": () => (/* binding */ AltBlocksDetailsComponent)
/* harmony export */ });
/* harmony import */ var app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/subscription-tracker/subscription-tracker */ 8083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ 5876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.component */ 6392);
/* harmony import */ var _main_info_main_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-info/main-info.component */ 4275);
/* harmony import */ var app_pipes_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pipes.pipe */ 2701);








const _c0 = function () { return ["/alt-blocks"]; };
const _c1 = function (a0) { return { hide_back_btn: a0 }; };
function AltBlocksDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "app-search", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("isVisible", function AltBlocksDetailsComponent_div_0_Template_app_search_isVisible_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.onIsVisible($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c1, ctx_r0.searchIsOpen === true));
} }
function AltBlocksDetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Zano block");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.altBlocksDetails.height, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.altBlocksDetails.hash);
} }
function AltBlocksDetailsComponent_div_4_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "PoS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AltBlocksDetailsComponent_div_4_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "PoW");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AltBlocksDetailsComponent_div_4_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "amUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, ctx_r8.altBlocksDetails.timestamp * 1000), "YYYY.MM.DD HH:mm:ss"));
} }
function AltBlocksDetailsComponent_div_4_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AltBlocksDetailsComponent_div_4_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "amUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, ctx_r10.altBlocksDetails.actual_timestamp * 1000), "YYYY.MM.DD HH:mm:ss"));
} }
function AltBlocksDetailsComponent_div_4_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AltBlocksDetailsComponent_div_4_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r12.altBlocksDetails.miner_text_info, " ");
} }
function AltBlocksDetailsComponent_div_4_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AltBlocksDetailsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "table", 14)(2, "tr", 15)(3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AltBlocksDetailsComponent_div_4_span_6_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AltBlocksDetailsComponent_div_4_span_7_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "tr")(9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Timestamp (UTC):");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AltBlocksDetailsComponent_div_4_span_12_Template, 4, 6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AltBlocksDetailsComponent_div_4_span_13_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "tr")(15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Actual Timestamp (UTC):");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AltBlocksDetailsComponent_div_4_span_18_Template, 4, 6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AltBlocksDetailsComponent_div_4_span_19_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "tr")(21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Difficulty:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "bitNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "tr")(27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Miner text info:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, AltBlocksDetailsComponent_div_4_td_29_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, AltBlocksDetailsComponent_div_4_ng_template_30_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "tr", 21)(33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Cumulative diff adjusted:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](37, "bitNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "tr", 22)(39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Cumulative diff presize:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](43, "bitNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "tr")(45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Orphan:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "tr")(50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Base reward:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "tr")(55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Transactions fee:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](59, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "table", 23)(61, "tbody")(62, "tr")(63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Reward penalty:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](67, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "tr")(69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Reward:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](73, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "tr")(75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Total block size, bytes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "tr", 24)(80, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Effective txs median, bytes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "tr")(85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "This block fee median");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](89, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "tr")(91, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "Effective fee median");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](95, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "tr", 25)(97, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "Current txs median, bytes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "tr")(102, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "Transactions:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "tr", 26)(107, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Total transactions size, bytes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](112, "td")(113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](31);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.altBlocksDetails.type == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.altBlocksDetails.type == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.altBlocksDetails.timestamp > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.altBlocksDetails.timestamp == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.altBlocksDetails.actual_timestamp > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.altBlocksDetails.actual_timestamp == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 21, ctx_r2.altBlocksDetails.difficulty));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.altBlocksDetails.miner_text_info)("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](37, 23, ctx_r2.altBlocksDetails.cumulative_diff_adjusted));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](43, 25, ctx_r2.altBlocksDetails.cumulative_diff_precise));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.altBlocksDetails.is_orphan ? "yes" : "no");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.altBlocksDetails.base_reward);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](59, 27, ctx_r2.altBlocksDetails.total_fee));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](67, 29, ctx_r2.altBlocksDetails.penalty));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](73, 31, ctx_r2.altBlocksDetails.summary_reward));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.altBlocksDetails.block_cumulative_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](89, 33, ctx_r2.altBlocksDetails.this_block_fee_median));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](95, 35, ctx_r2.altBlocksDetails.effective_fee_median));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.transactList == null ? null : ctx_r2.transactList.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.altBlocksDetails.total_txs_size);
} }
function AltBlocksDetailsComponent_div_5_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 33)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tr_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tr_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 4, tr_r16.fee));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 6, tr_r16.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", tr_r16.blob_size, " bytes");
} }
function AltBlocksDetailsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "table", 32)(4, "thead")(5, "tr")(6, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Hash");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Total amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AltBlocksDetailsComponent_div_5_tr_15_Template, 12, 8, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.transactList);
} }
class AltBlocksDetailsComponent extends app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__.SubscriptionTracker {
    constructor(route, mobileNavState) {
        super();
        this.route = route;
        this.mobileNavState = mobileNavState;
        this.altBlocksDetails = {};
        this.searchIsOpen = false;
        this.navIsOpen = false;
    }
    onIsVisible($event) {
        this.searchIsOpen = $event;
    }
    ngOnInit() {
        this.info = this.route.snapshot.data['MainInfo'];
        this.altBlocksDetails = this.route.snapshot.data['AltBlock'];
        try {
            this.transactList = JSON.parse(this.altBlocksDetails.transactions_details);
        }
        catch (error) {
            console.log(error);
        }
        this.mobileNavState.change.subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen;
        });
    }
}
AltBlocksDetailsComponent.ɵfac = function AltBlocksDetailsComponent_Factory(t) { return new (t || AltBlocksDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.MobileNavState)); };
AltBlocksDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AltBlocksDetailsComponent, selectors: [["app-alt-blocks-details-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [["class", "top_box", 4, "ngIf"], [1, "block_details"], ["class", "heading_block", 4, "ngIf"], ["class", "wrapper_table_block_details", 4, "ngIf"], ["class", "block_transactions_list", 4, "ngIf"], [1, "top_box"], [1, "left_box"], [1, "back_btn", 3, "routerLink", "ngClass"], [3, "isVisible"], [1, "heading_block"], [1, "currency_name"], [1, "height_block"], [1, "hash_block"], [1, "wrapper_table_block_details"], [1, "left_table"], [1, "block_type"], ["class", "pos", 4, "ngIf"], ["class", "pow", 4, "ngIf"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noneMinerTextInfo", ""], [1, "cumulative_diff_adjusted"], [1, "cumulative_diff_presize"], [1, "right_table"], [1, "effective_txs_median"], [1, "current_txs_median"], [1, "total_transactions_size"], [1, "tr_empty"], [1, "pos"], [1, "pow"], [1, "block_transactions_list"], [1, "title"], [1, "table_block_transaction"], [1, "hash"], [1, "fee"], [1, "total_amount"], [1, "size"], [4, "ngFor", "ngForOf"]], template: function AltBlocksDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AltBlocksDetailsComponent_div_0_Template, 5, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-main-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AltBlocksDetailsComponent_div_3_Template, 7, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AltBlocksDetailsComponent_div_4_Template, 114, 37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AltBlocksDetailsComponent_div_5_Template, 16, 1, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.navIsOpen === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.altBlocksDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.altBlocksDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.transactList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _main_info_main_info_component__WEBPACK_IMPORTED_MODULE_3__.MainInfoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], pipes: [app_pipes_pipe__WEBPACK_IMPORTED_MODULE_4__.DateFormatPipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_4__.UtcPipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_4__.BitNumberPipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_4__.MoneyParsePipe], styles: [".block_details[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  margin-top: 35px;\n}\n\n.heading_block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  padding-bottom: 15px;\n}\n\n@media (max-width: 991px) {\n  .heading_block[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n\n.heading_block[_ngcontent-%COMP%]   .currency_name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 300;\n  color: #fff;\n}\n\n.heading_block[_ngcontent-%COMP%]   .height_block[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 300;\n  color: #fff;\n  margin: 0 25px;\n  display: flex;\n}\n\n.heading_block[_ngcontent-%COMP%]   .height_block[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffff;\n  width: 18px;\n}\n\n.heading_block[_ngcontent-%COMP%]   .height_block[_ngcontent-%COMP%]    > a.prev_block[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.heading_block[_ngcontent-%COMP%]   .height_block[_ngcontent-%COMP%]    > a.next_block[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.heading_block[_ngcontent-%COMP%]   .hash_block[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9eaacc;\n  text-transform: uppercase;\n}\n\n@media (max-width: 991px) {\n  .heading_block[_ngcontent-%COMP%]   .hash_block[_ngcontent-%COMP%] {\n    padding-top: 12px;\n  }\n}\n\n@media (max-width: 575px) {\n  .heading_block[_ngcontent-%COMP%]   .hash_block[_ngcontent-%COMP%] {\n    white-space: normal;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    word-break: break-all;\n    line-break: strict;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n    line-height: 1.4;\n  }\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n@media (max-width: 761px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 50%;\n  table-layout: fixed;\n}\n\n@media (max-width: 761px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 38px;\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.block_type[_ngcontent-%COMP%]   .pos[_ngcontent-%COMP%], .wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.block_type[_ngcontent-%COMP%]   .pow[_ngcontent-%COMP%] {\n  padding: 2px 12px;\n  border-radius: 20px;\n  color: #fff;\n  font-size: 14px;\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.block_type[_ngcontent-%COMP%]   .pos[_ngcontent-%COMP%] {\n  background-color: #0c69fe;\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.block_type[_ngcontent-%COMP%]   .pow[_ngcontent-%COMP%] {\n  background-color: rgba(71, 239, 251, 0.7);\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n+1) {\n  background-color: #263163;\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: rgba(35, 78, 226, 0.1);\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n@media (max-width: 761px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.tr_empty[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 575px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.cumulative_diff_presize[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.cumulative_diff_adjusted[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.effective_txs_median[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.current_txs_median[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.total_transactions_size[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    white-space: normal;\n    line-height: 1.4;\n  }\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.tr_seed[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.tr_seed[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  white-space: normal;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-all;\n  line-break: strict;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.transactions_fee[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table.left_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  width: 50%;\n}\n\n@media (max-width: 761px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.left_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    width: 40%;\n  }\n}\n\n@media (max-width: 575px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.left_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    width: 50%;\n  }\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table.left_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 80px;\n  width: 65%;\n}\n\n@media (max-width: 991px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.left_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    padding-right: 20px;\n  }\n}\n\n@media (max-width: 761px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.left_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    width: 60%;\n  }\n}\n\n@media (max-width: 575px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.left_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    width: 50%;\n  }\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 80px;\n  width: 50%;\n}\n\n@media (max-width: 991px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding-left: 60px;\n    width: 60%;\n  }\n}\n\n@media (max-width: 575px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    width: 50%;\n  }\n}\n\n@media (max-width: 761px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding-left: 20px;\n    width: 40%;\n  }\n}\n\n@media (max-width: 575px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    width: 50%;\n  }\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  width: 45%;\n}\n\n@media (max-width: 991px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    width: 25%;\n  }\n}\n\n@media (max-width: 761px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    width: 60%;\n  }\n}\n\n@media (max-width: 575px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    width: 50%;\n  }\n}\n\n.block_transactions_list[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 45px;\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  color: #fff;\n  font-weight: 300;\n}\n\n.block_transactions_list[_ngcontent-%COMP%]   .table_block_transaction[_ngcontent-%COMP%] {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  overflow: hidden;\n}\n\n.block_transactions_list[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #1b3a8a, #32439f);\n}\n\n@media (max-width: 575px) {\n  .block_transactions_list[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n\n.block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: rgba(35, 78, 226, 0.1);\n}\n\n@media (max-width: 575px) {\n  .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n\n@media (max-width: 991px) {\n  .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: block;\n    width: 280px;\n  }\n}\n\n@media (max-width: 991px) and (max-width: 761px) {\n  .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    width: 190px;\n  }\n}\n\n@media (max-width: 991px) and (max-width: 575px) {\n  .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n}\n\n@media (max-width: 991px) and (max-width: 399px) {\n  .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    width: 85px;\n  }\n}\n\n@media (max-width: 991px) {\n  .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n}\n\n@media (max-width: 991px) {\n  .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    white-space: normal;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    word-break: break-all;\n    line-break: strict;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Fzc2V0cy9zdHlsZXMvbW9kdWxlcy9fYmxvY2stZGV0YWlscy5zY3NzIiwiYWx0LWJsb2Nrcy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vYXNzZXRzL3N0eWxlcy9iYXNlL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDRUo7O0FDOERJO0VGbkVKO0lBS1EsZUFBQTtFQ0lOO0FBQ0Y7O0FESEk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDS1I7O0FESEk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNLUjs7QURIWTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FDS2hCOztBREhZO0VBQ0ksaUJBQUE7QUNLaEI7O0FESFk7RUFDSSxnQkFBQTtBQ0toQjs7QURESTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBRUEseUJBQUE7QUNFUjs7QUM4Qkk7RUZwQ0E7SUFNUSxpQkFBQTtFQ0lWO0FBQ0Y7O0FDcUNJO0VGaERBO0lFN0JBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtJQUVBLGFBQUE7SUZnQ1EsZ0JBQUE7RUNhVjtBQUNGOztBRFZBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDYUo7O0FDYUk7RUY1Qko7SUFJUSxzQkFBQTtFQ2VOO0FBQ0Y7O0FEZEk7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUNnQlI7O0FDSUk7RUZ0QkE7SUFJUSxXQUFBO0VDa0JWO0FBQ0Y7O0FEakJRO0VBQ0ksWUFBQTtBQ21CWjs7QURqQmdCOztFQUVJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ21CcEI7O0FEakJnQjtFQUNJLHlCQUFBO0FDbUJwQjs7QURqQmdCO0VBQ0kseUNBQUE7QUNtQnBCOztBRGhCWTtFQUNJLHlCQUFBO0FDa0JoQjs7QURoQlk7RUFDSSx3Q0FBQTtBQ2tCaEI7O0FEaEJZO0VBQ0ksbUJBQUE7QUNrQmhCOztBQzFCSTtFRlVRO0lBRVEsYUFBQTtFQ2tCbEI7QUFDRjs7QUN6Qkk7RUZjWTtJQUVRLG1CQUFBO0lBQ0EsZ0JBQUE7RUNhdEI7QUFDRjs7QURWWTtFQUNJLFlBQUE7QUNZaEI7O0FEWGdCO0VFcEdaLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUVBLGFBQUE7QURrSEo7O0FEakJZO0VBQ0ksWUFBQTtBQ21CaEI7O0FEYmdCO0VBQ0ksVUFBQTtBQ2VwQjs7QUN4REk7RUZ3Q1k7SUFHUSxVQUFBO0VDaUJ0QjtBQUNGOztBQ3ZESTtFRmtDWTtJQU1RLFVBQUE7RUNtQnRCO0FBQ0Y7O0FEakJnQjtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtBQ21CcEI7O0FDNUVJO0VGdURZO0lBSVEsbUJBQUE7RUNxQnRCO0FBQ0Y7O0FDM0VJO0VGaURZO0lBT1EsVUFBQTtFQ3VCdEI7QUFDRjs7QUMxRUk7RUYyQ1k7SUFVUSxVQUFBO0VDeUJ0QjtBQUNGOztBRG5CZ0I7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNxQnBCOztBQy9GSTtFRndFWTtJQUlRLGtCQUFBO0lBQ0EsVUFBQTtFQ3VCdEI7QUFDRjs7QUN6Rkk7RUY0RFk7SUFRUSxVQUFBO0VDeUJ0QjtBQUNGOztBQ3BHSTtFRmtFWTtJQVdRLGtCQUFBO0lBQ0EsVUFBQTtFQzJCdEI7QUFDRjs7QUNwR0k7RUY0RFk7SUFlUSxVQUFBO0VDNkJ0QjtBQUNGOztBRDNCZ0I7RUFDSSxVQUFBO0FDNkJwQjs7QUN4SEk7RUYwRlk7SUFHUSxVQUFBO0VDK0J0QjtBQUNGOztBQ3ZISTtFRm9GWTtJQU1RLFVBQUE7RUNpQ3RCO0FBQ0Y7O0FDdEhJO0VGOEVZO0lBU1EsVUFBQTtFQ21DdEI7QUFDRjs7QUQzQkk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQzhCUjs7QUQ1Qkk7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUM4QlI7O0FENUJJO0VBRUksdURBQUE7QUM2QlI7O0FDNUlJO0VGZ0hJO0lBRVEsYUFBQTtFQzhCZDtBQUNGOztBRHpCWTtFQUNJLHdDQUFBO0FDMkJoQjs7QUNwSkk7RUYySFE7SUFFUSxhQUFBO0VDMkJsQjtBQUNGOztBQ3JLSTtFRjhJZ0I7O0lBRUksY0FBQTtJQUNBLFlBQUE7RUMwQnRCO0FBQ0Y7O0FDdEtJO0VGd0lnQjs7SUFLUSxZQUFBO0VDOEIxQjtBQUNGOztBQ3RLSTtFRmtJZ0I7O0lBUVEsWUFBQTtFQ2lDMUI7QUFDRjs7QUN2S0k7RUY2SGdCOztJQVdRLFdBQUE7RUNvQzFCO0FBQ0Y7O0FDOUxJO0VGNEpnQjtJRWxPaEIsZ0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VEd1FGO0FBQ0Y7O0FDck1JO0VGK0pnQjtJRWhPaEIsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLHFCQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtJQUNBLHFCQUFBO0lBRUEsYUFBQTtFRDBRRjtBQUNGIiwiZmlsZSI6ImFsdC1ibG9ja3MtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9ja19kZXRhaWxzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG59XG4uaGVhZGluZ19ibG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgQGluY2x1ZGUgbWF4OTkxIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbiAgICAuY3VycmVuY3lfbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIC5oZWlnaHRfYmxvY2sge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW46IDAgMjVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgPiBhIHtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogI2ZmZmY7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLnByZXZfYmxvY2sge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5uZXh0X2Jsb2NrIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5oYXNoX2Jsb2NrIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzllYWFjYztcbiAgICAgICAgLy9mb250LXdlaWdodDogMzAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBAaW5jbHVkZSBtYXg5OTEge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgbWF4NTc1IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRleHRXcmFwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICAgICAgQGluY2x1ZGUgbWF4NzYxIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgICAgICYuYmxvY2tfdHlwZSB7XG4gICAgICAgICAgICAgICAgLnBvcyxcbiAgICAgICAgICAgICAgICAucG93IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wb3Mge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwYzY5ZmUsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucG93IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjNDdlZmZiLCAwLjcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDJuICsgMSkge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzI2MzE2MywgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOm50aC1jaGlsZCgybikge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzIzNGVlMiwgMC4xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi50cl9lbXB0eSB7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4NzYxIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmN1bXVsYXRpdmVfZGlmZl9wcmVzaXplLFxuICAgICAgICAgICAgJi5jdW11bGF0aXZlX2RpZmZfYWRqdXN0ZWQsXG4gICAgICAgICAgICAmLmVmZmVjdGl2ZV90eHNfbWVkaWFuLFxuICAgICAgICAgICAgJi5jdXJyZW50X3R4c19tZWRpYW4sXG4gICAgICAgICAgICAmLnRvdGFsX3RyYW5zYWN0aW9uc19zaXplIHtcbiAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDU3NSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYudHJfc2VlZCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHRkOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0ZXh0V3JhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLnRyYW5zYWN0aW9uc19mZWUge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYubGVmdF90YWJsZSB7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDU3NSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDk5MSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDU3NSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYucmlnaHRfdGFibGUge1xuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDk5MSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDU3NSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDU3NSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDk5MSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDU3NSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYmxvY2tfdHJhbnNhY3Rpb25zX2xpc3Qge1xuICAgIC50aXRsZSB7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG4gICAgLnRhYmxlX2Jsb2NrX3RyYW5zYWN0aW9uIHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIHRoZWFkIHtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNmZmYsIC4yKTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMWIzYThhLCAjMzI0MzlmKTtcbiAgICAgICAgdGgge1xuICAgICAgICAgICAgQGluY2x1ZGUgbWF4NTc1IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRib2R5IHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4pIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMyMzRlZTIsIDAuMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4NTc1IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGFzaCB7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4OTkxIHtcbiAgICAgICAgICAgICAgICAgICAgPiBhLFxuICAgICAgICAgICAgICAgICAgICA+IHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXg3NjEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDU3NSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+IGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdGV4dC10cnVuY2F0ZTsgLy8gYmxvY2stZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID4gc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0ZXh0V3JhcDsgLy8gYWx0LWJsb2NrLWRldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mZWUge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvdGFsX2Ftb3VudCB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2l6ZSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIuYmxvY2tfZGV0YWlscyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG5cbi5oZWFkaW5nX2Jsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuaGVhZGluZ19ibG9jayB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG4uaGVhZGluZ19ibG9jayAuY3VycmVuY3lfbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNmZmY7XG59XG4uaGVhZGluZ19ibG9jayAuaGVpZ2h0X2Jsb2NrIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwIDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaGVhZGluZ19ibG9jayAuaGVpZ2h0X2Jsb2NrID4gYSBzdmcge1xuICBmaWxsOiAjZmZmZjtcbiAgd2lkdGg6IDE4cHg7XG59XG4uaGVhZGluZ19ibG9jayAuaGVpZ2h0X2Jsb2NrID4gYS5wcmV2X2Jsb2NrIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uaGVhZGluZ19ibG9jayAuaGVpZ2h0X2Jsb2NrID4gYS5uZXh0X2Jsb2NrIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5oZWFkaW5nX2Jsb2NrIC5oYXNoX2Jsb2NrIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzllYWFjYztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuaGVhZGluZ19ibG9jayAuaGFzaF9ibG9jayB7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuaGVhZGluZ19ibG9jayAuaGFzaF9ibG9jayB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgbGluZS1icmVhazogc3RyaWN0O1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIH1cbn1cblxuLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjFweCkge1xuICAud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4ud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlIHtcbiAgd2lkdGg6IDUwJTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjFweCkge1xuICAud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZSB0ciB7XG4gIGhlaWdodDogMzhweDtcbn1cbi53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUgdHIuYmxvY2tfdHlwZSAucG9zLFxuLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZSB0ci5ibG9ja190eXBlIC5wb3cge1xuICBwYWRkaW5nOiAycHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUgdHIuYmxvY2tfdHlwZSAucG9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNjlmZTtcbn1cbi53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUgdHIuYmxvY2tfdHlwZSAucG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MSwgMjM5LCAyNTEsIDAuNyk7XG59XG4ud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlIHRyOm50aC1jaGlsZCgybisxKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjMxNjM7XG59XG4ud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlIHRyOm50aC1jaGlsZCgybikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM1LCA3OCwgMjI2LCAwLjEpO1xufVxuLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZSB0ciB0ZCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzYxcHgpIHtcbiAgLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZSB0ci50cl9lbXB0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUgdHIuY3VtdWxhdGl2ZV9kaWZmX3ByZXNpemUgdGQsIC53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUgdHIuY3VtdWxhdGl2ZV9kaWZmX2FkanVzdGVkIHRkLCAud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlIHRyLmVmZmVjdGl2ZV90eHNfbWVkaWFuIHRkLCAud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlIHRyLmN1cnJlbnRfdHhzX21lZGlhbiB0ZCwgLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZSB0ci50b3RhbF90cmFuc2FjdGlvbnNfc2l6ZSB0ZCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG59XG4ud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlIHRyLnRyX3NlZWQge1xuICBoZWlnaHQ6IDUwcHg7XG59XG4ud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlIHRyLnRyX3NlZWQgdGQ6bGFzdC1jaGlsZCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBsaW5lLWJyZWFrOiBzdHJpY3Q7XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG4ud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlIHRyLnRyYW5zYWN0aW9uc19mZWUge1xuICBoZWlnaHQ6IDUwcHg7XG59XG4ud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlLmxlZnRfdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNTAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MXB4KSB7XG4gIC53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUubGVmdF90YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUubGVmdF90YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZS5sZWZ0X3RhYmxlIHRkOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xuICB3aWR0aDogNjUlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUubGVmdF90YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzYxcHgpIHtcbiAgLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZS5sZWZ0X3RhYmxlIHRkOmxhc3QtY2hpbGQge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlLmxlZnRfdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZS5yaWdodF90YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbiAgd2lkdGg6IDUwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlLnJpZ2h0X3RhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUucmlnaHRfdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjFweCkge1xuICAud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlLnJpZ2h0X3RhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUucmlnaHRfdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbi53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUucmlnaHRfdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gIHdpZHRoOiA0NSU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZS5yaWdodF90YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzYxcHgpIHtcbiAgLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZS5yaWdodF90YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZS5yaWdodF90YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5cbi5ibG9ja190cmFuc2FjdGlvbnNfbGlzdCAudGl0bGUge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uYmxvY2tfdHJhbnNhY3Rpb25zX2xpc3QgLnRhYmxlX2Jsb2NrX3RyYW5zYWN0aW9uIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmxvY2tfdHJhbnNhY3Rpb25zX2xpc3QgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxYjNhOGEsICMzMjQzOWYpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5ibG9ja190cmFuc2FjdGlvbnNfbGlzdCB0aGVhZCB0aCB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxufVxuLmJsb2NrX3RyYW5zYWN0aW9uc19saXN0IHRib2R5IHRyOm50aC1jaGlsZCgybikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM1LCA3OCwgMjI2LCAwLjEpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5ibG9ja190cmFuc2FjdGlvbnNfbGlzdCB0Ym9keSB0ciB0ZCB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5ibG9ja190cmFuc2FjdGlvbnNfbGlzdCB0Ym9keSB0ciAuaGFzaCA+IGEsXG4uYmxvY2tfdHJhbnNhY3Rpb25zX2xpc3QgdGJvZHkgdHIgLmhhc2ggPiBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtYXgtd2lkdGg6IDc2MXB4KSB7XG4gIC5ibG9ja190cmFuc2FjdGlvbnNfbGlzdCB0Ym9keSB0ciAuaGFzaCA+IGEsXG4uYmxvY2tfdHJhbnNhY3Rpb25zX2xpc3QgdGJvZHkgdHIgLmhhc2ggPiBzcGFuIHtcbiAgICB3aWR0aDogMTkwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5ibG9ja190cmFuc2FjdGlvbnNfbGlzdCB0Ym9keSB0ciAuaGFzaCA+IGEsXG4uYmxvY2tfdHJhbnNhY3Rpb25zX2xpc3QgdGJvZHkgdHIgLmhhc2ggPiBzcGFuIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtYXgtd2lkdGg6IDM5OXB4KSB7XG4gIC5ibG9ja190cmFuc2FjdGlvbnNfbGlzdCB0Ym9keSB0ciAuaGFzaCA+IGEsXG4uYmxvY2tfdHJhbnNhY3Rpb25zX2xpc3QgdGJvZHkgdHIgLmhhc2ggPiBzcGFuIHtcbiAgICB3aWR0aDogODVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5ibG9ja190cmFuc2FjdGlvbnNfbGlzdCB0Ym9keSB0ciAuaGFzaCA+IGEge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5ibG9ja190cmFuc2FjdGlvbnNfbGlzdCB0Ym9keSB0ciAuaGFzaCA+IHNwYW4ge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIGxpbmUtYnJlYWs6IHN0cmljdDtcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxufSIsIkBtaXhpbiB0ZXh0LXRydW5jYXRlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5AbWl4aW4gdGV4dFdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIGxpbmUtYnJlYWs6IHN0cmljdDtcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgaHlwaGVuczogYXV0bztcbn1cbkBtaXhpbiBjb3ZlckJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbkBtaXhpbiBhYnMoJHRvcDogYXV0bywgJHJpZ2h0OiBhdXRvLCAkYm90dG9tOiBhdXRvLCAkbGVmdDogYXV0bykge1xuICAgIHRvcDogJHRvcDtcbiAgICByaWdodDogJHJpZ2h0O1xuICAgIGJvdHRvbTogJGJvdHRvbTtcbiAgICBsZWZ0OiAkbGVmdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5AbWl4aW4gY292ZXJJbWcge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xufVxuQG1peGluIHZhbGluZ0JveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbkBtaXhpbiB1blNlbGVjdCB7XG4gICAgLXdlYmtpdC10b3VjaC1jb2xsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuQG1peGluIGNsZWFyZml4IHtcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG59XG5AbWl4aW4gbWF4MTE5OSB7XG4gICAgLy8gbWFrZXQgMTE3MVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1heDExNzAge1xuICAgIC8vIG1ha2V0cyA5OTJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE3MHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtYXg5OTEge1xuICAgIC8vIG1ha2V0cyA3NjJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1heDc2MSB7XG4gICAgLy8gbWFrZXRzIDU3NlxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbWF4NTc1IHtcbiAgICAvLyBtYWtldHMgNDAwXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtb2JpbGUge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzOTlweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gdHJpYW5nbGVVcCgkdzogMjBweCwgJGg6IDIwcHgsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlcjogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogJGggc29saWQgJGNvbG9yO1xufVxuQG1peGluIHRyaWFuZ2xlRG93bigkdzogMjBweCwgJGg6IDIwcHgsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3A6ICRoIHNvbGlkICRjb2xvcjtcbn1cbkBtaXhpbiB0cmlhbmdsZUxlZnQoJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6ICRoIHNvbGlkICRjb2xvcjtcbn1cbkBtaXhpbiB0cmlhbmdsZVJpZ2h0KCR3OiAyMHB4LCAkaDogMjBweCwgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6ICRoIHNvbGlkICRjb2xvcjtcbn1cbkBtaXhpbiB0cmlhbmdsZVRvcExlZnQoJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAkdyBzb2xpZCAkY29sb3I7XG4gICAgYm9yZGVyLXJpZ2h0OiAkaCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbkBtaXhpbiBwYXJhbGxlbG9ncmFtKCR3OiAxNTBweCwgJGg6IDEwMHB4LCAkc2tldzogMjBkZWcsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6ICR3O1xuICAgIGhlaWdodDogJGg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoJHNrZXcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBza2V3KCRza2V3KTtcbiAgICAtby10cmFuc2Zvcm06IHNrZXcoJHNrZXcpO1xuICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgICA+IHNwYW4sXG4gICAgYSxcbiAgICBhZGRyZXNzIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLSRza2V3KTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNrZXcoLSRza2V3KTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiBza2V3KC0kc2tldyk7XG4gICAgfVxufVxuQG1peGluIGJvdHRvbUxpbmUoJGg6IDhweCwgJGNvbG9yOiAjMDBiOWJmKSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6ICRoO1xufVxuQG1peGluIGNlbnRlci1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuQG1peGluIGljb0NlbnRlciB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuQG1peGluIHBzZXVkbygkZGlzcGxheTogYmxvY2ssICRwb3M6IGFic29sdXRlLCAkY29udGVudDogJycpIHtcbiAgICBjb250ZW50OiAkY29udGVudDtcbiAgICBkaXNwbGF5OiAkZGlzcGxheTtcbiAgICBwb3NpdGlvbjogJHBvcztcbn1cbkBtaXhpbiBiYXJ0YmxvY2sge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMjM0ZWUyLCAwLjEpO1xufVxuIl19 */"] });


/***/ }),

/***/ 229:
/*!****************************************************!*\
  !*** ./src/app/alt-blocks/alt-blocks.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AltBlocksComponent": () => (/* binding */ AltBlocksComponent)
/* harmony export */ });
/* harmony import */ var app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/subscription-tracker/subscription-tracker */ 8083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ 5876);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ 3694);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.component */ 6392);
/* harmony import */ var app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pipes.pipe */ 2701);








function AltBlocksComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { hide_heading: a0 }; };
function AltBlocksComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Alt-Blocks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-search", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("isVisible", function AltBlocksComponent_div_1_Template_app_search_isVisible_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.onIsVisible($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, ctx_r1.searchIsOpen === true));
} }
function AltBlocksComponent_div_2_thead_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "thead")(1, "tr")(2, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Timestamp (UTC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Actual timestamp (UTC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Hash");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
function AltBlocksComponent_div_2_tr_4_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "(PoS)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AltBlocksComponent_div_2_tr_4_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "(PoW)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return ["/alt-blocks", a1]; };
function AltBlocksComponent_div_2_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 15)(2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AltBlocksComponent_div_2_tr_4_span_4_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AltBlocksComponent_div_2_tr_4_span_5_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "amUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "amUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td", 20)(19, "span", 22)(20, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](20, _c1, item_r9.hash));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r9.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r9.type == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r9.type == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 13, item_r9.timestamp * 1000), "YYYY.MM.DD HH:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 15, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 18, item_r9.actual_timestamp * 1000), "YYYY.MM.DD HH:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r9.block_cumulative_size, " bytes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r9.transactions_details.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](22, _c1, item_r9.hash));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r9.hash);
} }
function AltBlocksComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No data");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AltBlocksComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Pages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AltBlocksComponent_div_2_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r12.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "svg", 27)(6, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AltBlocksComponent_div_2_div_6_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "svg", 27)(10, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function AltBlocksComponent_div_2_div_6_Template_input_input_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r15.currentPage = $event.target.value; })("change", function AltBlocksComponent_div_2_div_6_Template_input_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r16.onChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 32)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Items on page:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function AltBlocksComponent_div_2_div_6_Template_input_input_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r17.count = $event.target.value; })("change", function AltBlocksComponent_div_2_div_6_Template_input_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r18.onChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r8.currentPage <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r8.altBlocks.length < ctx_r8.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r8.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r8.count);
} }
function AltBlocksComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AltBlocksComponent_div_2_thead_2_Template, 14, 0, "thead", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AltBlocksComponent_div_2_tr_4_Template, 22, 24, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AltBlocksComponent_div_2_div_5_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AltBlocksComponent_div_2_div_6_Template, 17, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.altBlocks.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.altBlocks);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.altBlocks.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.visiblePagination === true && ctx_r2.altBlocks.length !== 0);
} }
class AltBlocksComponent extends app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__.SubscriptionTracker {
    constructor(route, httpService, cookieService, mobileNavState) {
        super();
        this.route = route;
        this.httpService = httpService;
        this.cookieService = cookieService;
        this.mobileNavState = mobileNavState;
        this.searchIsOpen = false;
        this.maxCount = 1000;
        this.visiblePagination = false;
        this.navIsOpen = false;
    }
    onIsVisible($event) {
        this.searchIsOpen = $event;
    }
    ngOnInit() {
        this.currentPage = 1;
        this.count = 20;
        this.offset = 0;
        if (this.cookieService.get('setCountAltBlocksCookie')) {
            this.count = parseInt(this.cookieService.get('setCountAltBlocksCookie'), 10);
        }
        this.onChange();
        this.mobileNavState.change.subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen;
        });
    }
    onChange() {
        this.loader = true;
        if (this.count > this.maxCount) {
            this.count = this.maxCount;
        }
        if (!this.count) {
            this.count = 1;
        }
        this.limitList = +this.count;
        this.cookieService.set('setCountAltBlocksCookie', this.limitList);
        this.offset = (this.currentPage - 1) * this.count;
        this._track(this.httpService.getAltBlocks(this.offset, this.count).subscribe({
            next: (data) => {
                this.altBlocks = data;
                for (let i = 0; i < this.altBlocks.length; i++) {
                    this.altBlocks[i].transactions_details = JSON.parse(this.altBlocks[i].transactions_details);
                }
            },
            error: (err) => {
                console.log('getAltBlocks', err);
            },
            complete: () => {
                this.loader = false;
                this.visiblePagination = true;
            }
        }));
    }
    nextPage() {
        if (this.altBlocks.length >= +this.count) {
            this.currentPage++;
            this.onChange();
        }
    }
    prevPage() {
        if (this.currentPage - 1 > 0) {
            this.currentPage--;
            this.onChange();
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
AltBlocksComponent.ɵfac = function AltBlocksComponent_Factory(t) { return new (t || AltBlocksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.MobileNavState)); };
AltBlocksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AltBlocksComponent, selectors: [["app-alt-blocks"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 3, consts: [["class", "overlay", 4, "ngIf"], ["class", "top_box", 4, "ngIf"], ["class", "wrapper_table", 4, "ngIf"], [1, "overlay"], [1, "loader"], [1, "top_box"], [1, "left_box"], [1, "mobile_heading", 3, "ngClass"], [3, "isVisible"], [1, "wrapper_table"], [1, "table_alt_blocks"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "no_data", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "height"], [1, "timestamp"], [1, "actual_timestamp"], [1, "size"], [1, "transactions"], [1, "hash"], [3, "routerLink"], [1, "cont_hash"], [1, "no_data"], [1, "pagination"], [1, "left_position"], ["type", "button", 1, "prev_btn", 3, "disabled", "click"], ["x", "0px", "y", "0px", "viewBox", "0 0 477.175 477.175"], ["d", "M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\n              c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"], ["type", "button", 1, "next_btn", 3, "disabled", "click"], ["d", "M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5\n              c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z\n              "], ["type", "text", 3, "value", "input", "change"], [1, "right_position"]], template: function AltBlocksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AltBlocksComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AltBlocksComponent_div_1_Template, 5, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AltBlocksComponent_div_2_Template, 7, 4, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loader === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.navIsOpen === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.altBlocks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], pipes: [app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__.DateFormatPipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__.UtcPipe], styles: [".wrapper_table[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n}\n@media (max-width: 1170px) {\n  .wrapper_table[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n}\n.table_alt_blocks[_ngcontent-%COMP%] {\n  table-layout: auto;\n  width: 100%;\n  white-space: nowrap;\n}\n.table_alt_blocks[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%] {\n  width: 100%;\n  white-space: nowrap;\n}\n.table_alt_blocks[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]   .cont_hash[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 100%;\n  padding: 0 !important;\n  display: -moz-flex;\n  display: flex;\n  vertical-align: text-bottom !important;\n}\n.table_alt_blocks[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]   .cont_hash[_ngcontent-%COMP%]:after {\n  content: \"-\";\n  display: inline;\n  visibility: hidden;\n  width: 0;\n}\n.table_alt_blocks[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]   .cont_hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #68a1ff;\n  position: absolute;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -ms-text-overflow: ellipsis;\n  -o-text-overflow: ellipsis;\n  max-width: 100%;\n  min-width: 0;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n.table_alt_blocks[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]   .cont_hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n  content: \"-\";\n  display: inline;\n  visibility: hidden;\n  width: 0;\n}\n@media (max-width: 761px) {\n  .table_alt_blocks[_ngcontent-%COMP%] {\n    min-width: 850px;\n  }\n}\n@media (max-width: 761px) {\n  .pagination[_ngcontent-%COMP%] {\n    min-width: 850px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsdC1ibG9ja3MuY29tcG9uZW50LnNjc3MiLCIuLi8uLi9hc3NldHMvc3R5bGVzL2Jhc2UvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQUFKO0FDOERJO0VEaEVKO0lBSVEsZ0JBQUE7RUFFTjtBQUNGO0FBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUdKO0FBRkk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFJUjtBQUhRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFFQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtBQUtaO0FBSlk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQU1oQjtBQUpZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBTWhCO0FBSmdCO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFNcEI7QUN3Qkk7RURyRUo7SUE4Q1EsZ0JBQUE7RUFHTjtBQUNGO0FDbUJJO0VEakJKO0lBRVEsZ0JBQUE7RUFBTjtBQUNGIiwiZmlsZSI6ImFsdC1ibG9ja3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzL2Jhc2UvbWl4aW5zJztcbi53cmFwcGVyX3RhYmxlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgQGluY2x1ZGUgbWF4MTE3MCB7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgfVxufVxuLnRhYmxlX2FsdF9ibG9ja3Mge1xuICAgIHRhYmxlLWxheW91dDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC5oYXNoIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIC5jb250X2hhc2gge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgZGlzcGxheTogLW1vei1mbGV4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJy0nO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA+IGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjhhMWZmO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgLW1zLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJy0nO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWF4NzYxIHtcbiAgICAgICAgbWluLXdpZHRoOiA4NTBweDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtYXgxMTcwIHtcbiAgICB9XG59XG4ucGFnaW5hdGlvbiB7XG4gICAgQGluY2x1ZGUgbWF4NzYxIHtcbiAgICAgICAgbWluLXdpZHRoOiA4NTBweDtcbiAgICB9XG59XG4iLCJAbWl4aW4gdGV4dC10cnVuY2F0ZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1peGluIHRleHRXcmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBsaW5lLWJyZWFrOiBzdHJpY3Q7XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG59XG5AbWl4aW4gY292ZXJCb3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5AbWl4aW4gYWJzKCR0b3A6IGF1dG8sICRyaWdodDogYXV0bywgJGJvdHRvbTogYXV0bywgJGxlZnQ6IGF1dG8pIHtcbiAgICB0b3A6ICR0b3A7XG4gICAgcmlnaHQ6ICRyaWdodDtcbiAgICBib3R0b206ICRib3R0b207XG4gICAgbGVmdDogJGxlZnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuQG1peGluIGNvdmVySW1nIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cbkBtaXhpbiB2YWxpbmdCb3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5AbWl4aW4gdW5TZWxlY3Qge1xuICAgIC13ZWJraXQtdG91Y2gtY29sbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbkBtaXhpbiBjbGVhcmZpeCB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuQG1peGluIG1heDExOTkge1xuICAgIC8vIG1ha2V0IDExNzFcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtYXgxMTcwIHtcbiAgICAvLyBtYWtldHMgOTkyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNzBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbWF4OTkxIHtcbiAgICAvLyBtYWtldHMgNzYyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtYXg3NjEge1xuICAgIC8vIG1ha2V0cyA1NzZcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzYxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1heDU3NSB7XG4gICAgLy8gbWFrZXRzIDQwMFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbW9iaWxlIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIHRyaWFuZ2xlVXAoJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXI6ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206ICRoIHNvbGlkICRjb2xvcjtcbn1cbkBtaXhpbiB0cmlhbmdsZURvd24oJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wOiAkaCBzb2xpZCAkY29sb3I7XG59XG5AbWl4aW4gdHJpYW5nbGVMZWZ0KCR3OiAyMHB4LCAkaDogMjBweCwgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAkaCBzb2xpZCAkY29sb3I7XG59XG5AbWl4aW4gdHJpYW5nbGVSaWdodCgkdzogMjBweCwgJGg6IDIwcHgsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAkaCBzb2xpZCAkY29sb3I7XG59XG5AbWl4aW4gdHJpYW5nbGVUb3BMZWZ0KCR3OiAyMHB4LCAkaDogMjBweCwgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogJHcgc29saWQgJGNvbG9yO1xuICAgIGJvcmRlci1yaWdodDogJGggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5AbWl4aW4gcGFyYWxsZWxvZ3JhbSgkdzogMTUwcHgsICRoOiAxMDBweCwgJHNrZXc6IDIwZGVnLCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAkdztcbiAgICBoZWlnaHQ6ICRoO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KCRza2V3KTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2tldygkc2tldyk7XG4gICAgLW8tdHJhbnNmb3JtOiBza2V3KCRza2V3KTtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4gICAgPiBzcGFuLFxuICAgIGEsXG4gICAgYWRkcmVzcyB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0kc2tldyk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBza2V3KC0kc2tldyk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogc2tldygtJHNrZXcpO1xuICAgIH1cbn1cbkBtaXhpbiBib3R0b21MaW5lKCRoOiA4cHgsICRjb2xvcjogIzAwYjliZikge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAkaDtcbn1cbkBtaXhpbiBjZW50ZXItYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbkBtaXhpbiBpY29DZW50ZXIge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbkBtaXhpbiBwc2V1ZG8oJGRpc3BsYXk6IGJsb2NrLCAkcG9zOiBhYnNvbHV0ZSwgJGNvbnRlbnQ6ICcnKSB7XG4gICAgY29udGVudDogJGNvbnRlbnQ7XG4gICAgZGlzcGxheTogJGRpc3BsYXk7XG4gICAgcG9zaXRpb246ICRwb3M7XG59XG5AbWl4aW4gYmFydGJsb2NrIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzIzNGVlMiwgMC4xKTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 3832:
/*!**************************************!*\
  !*** ./src/app/api/api.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiComponent": () => (/* binding */ ApiComponent)
/* harmony export */ });
/* harmony import */ var app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/subscription-tracker/subscription-tracker */ 8083);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-json-viewer */ 6124);





function ApiComponent_ngx_json_viewer_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-json-viewer", 13);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("json", ctx_r0.infoExample)("expanded", false);
} }
function ApiComponent_ngx_json_viewer_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-json-viewer", 13);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("json", ctx_r1.currentinfoExample)("expanded", false);
} }
function ApiComponent_ngx_json_viewer_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-json-viewer", 13);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("json", ctx_r2.getBlocksDetails)("expanded", false);
} }
function ApiComponent_ngx_json_viewer_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-json-viewer", 13);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("json", ctx_r3.getMainBlockDetails)("expanded", false);
} }
function ApiComponent_ngx_json_viewer_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-json-viewer", 13);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("json", ctx_r4.getAltBlocksDetails)("expanded", false);
} }
function ApiComponent_ngx_json_viewer_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-json-viewer", 13);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("json", ctx_r5.getAltBlockDetails)("expanded", false);
} }
function ApiComponent_ngx_json_viewer_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-json-viewer", 13);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("json", ctx_r6.geAllPoolTXlist)("expanded", false);
} }
function ApiComponent_ngx_json_viewer_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-json-viewer", 13);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("json", ctx_r7.getPoolTXSbriefDetails)("expanded", false);
} }
function ApiComponent_ngx_json_viewer_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-json-viewer", 13);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("json", ctx_r8.getTxIdsForPool)("expanded", false);
} }
function ApiComponent_ngx_json_viewer_214_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-json-viewer", 13);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("json", ctx_r9.getTXdetails)("expanded", false);
} }
class ApiComponent extends app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__.SubscriptionTracker {
    constructor() {
        super();
        this.apiEndpoint = `${environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backend}/api`;
        this.dropdowns = {
            info: false,
            blocks: false,
            block: false,
            altblocks: false,
            altblock: false,
            pool_transact: false,
            brief_pool_transact: false,
            transaction: false
        };
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    createLink(bookmark) {
        return `${environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.documentionApi}/reference/${bookmark}`;
    }
    ngOnInit() {
        this.objectLinks = {
            url_request_format: `${environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backend}/api/{method}/{param1}/{param2}`,
            utl_get_info: `${environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backend}/api/get_info/4294967295`,
            utl_get_total_coins: `${environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backend}/api/get_total_coins`,
            url_get_blocks_details: `${environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backend}/api/get_blocks_details/{:offset}/{:count}`,
            url_get_main_block_details: `${environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backend}/api/get_main_block_details/{:hash}`,
            url_get_alt_blocks_details: `${environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backend}/api/get_alt_blocks_details/{:offset}/{:count}`,
            url_get_alt_block_details: `${environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backend}/api/get_alt_block_details/{:hash}`,
            url_get_all_pool_tx_list: `${environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backend}/api/get_all_pool_tx_list`,
            url_get_pool_txs_details: `${environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backend}/api/get_pool_txs_details`,
            url_get_pool_txs_brief_details: `${environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backend}/api/get_pool_txs_brief_details`,
            url_request_ids_all_txs_pool: `${environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backend}/api/get_all_pool_tx_list`,
            url_get_tx_details: `${environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backend}/api/get_tx_details/{:tx_hash}`
        };
        this.currentinfoExample = {
            total_coins: 15285792000000000
        };
        this.getTxIdsForPool = {
            id: 0,
            jsonrpc: '2.0',
            result: {
                ids: [
                    '313f363308ec6e5ada8e2c7b5faec8a41ccebf87b0a5adcf978af080d2669f32',
                    '7300c0ac204304e068f5f7ea813974a557cd174193ac81253f5b1d17cbc32a43'
                ],
                status: 'OK'
            }
        };
        this.infoExample = {
            alias_count: 84,
            alt_blocks_count: 244,
            block_reward: 1000000000000,
            current_blocks_median: 125000,
            current_max_allowed_block_size: 250000,
            current_network_hashrate_350: 11097233049,
            current_network_hashrate_50: 0,
            daemon_network_state: 2,
            default_fee: 10000000000,
            expiration_median_timestamp: 0,
            grey_peerlist_size: 45,
            height: 18435,
            incoming_connections_count: 9,
            last_block_hash: 'f36c1dab5a7eb04bb6ff504e38239b827ac572883277aa6908fc320a6e285d85',
            last_block_size: 0,
            last_block_timestamp: 1558424224,
            last_block_total_reward: 1000000000000,
            last_pos_timestamp: 0,
            last_pow_timestamp: 0,
            max_net_seen_height: 13374,
            mi: {
                build_no: 26,
                mode: 0,
                ver_major: 1,
                ver_minor: 0,
                ver_revision: 0
            },
            minimum_fee: 100000,
            net_time_delta_median: 0,
            offers_count: 0,
            outgoing_connections_count: 8,
            outs_stat: {
                amount_0_001: 0,
                amount_0_01: 0,
                amount_0_1: 0,
                amount_1: 0,
                amount_10: 0,
                amount_100: 0,
                amount_1000: 0,
                amount_10000: 0,
                amount_100000: 0,
                amount_1000000: 0
            },
            performance_data: {
                all_txs_insert_time_5: 0,
                block_processing_time_0: 0,
                block_processing_time_1: 0,
                etc_stuff_6: 0,
                insert_time_4: 0,
                longhash_calculating_time_3: 0,
                map_size: 0,
                raise_block_core_event: 0,
                target_calculating_calc: 0,
                target_calculating_enum_blocks: 0,
                target_calculating_time_2: 0,
                tx_add_one_tx_time: 0,
                tx_append_is_expired: 0,
                tx_append_rl_wait: 0,
                tx_append_time: 0,
                tx_check_exist: 0,
                tx_check_inputs_attachment_check: 0,
                tx_check_inputs_loop: 0,
                tx_check_inputs_loop_ch_in_val_sig: 0,
                tx_check_inputs_loop_kimage_check: 0,
                tx_check_inputs_loop_scan_outputkeys_get_item_size: 0,
                tx_check_inputs_loop_scan_outputkeys_loop: 0,
                tx_check_inputs_loop_scan_outputkeys_loop_find_tx: 0,
                tx_check_inputs_loop_scan_outputkeys_loop_get_subitem: 0,
                tx_check_inputs_loop_scan_outputkeys_loop_handle_output: 0,
                tx_check_inputs_loop_scan_outputkeys_relative_to_absolute: 0,
                tx_check_inputs_prefix_hash: 0,
                tx_check_inputs_time: 0,
                tx_count: 0,
                tx_prapare_append: 0,
                tx_print_log: 0,
                tx_process_attachment: 0,
                tx_process_extra: 0,
                tx_process_inputs: 0,
                tx_push_global_index: 0,
                tx_store_db: 0,
                writer_tx_count: 0
            },
            pos_allowed: true,
            pos_block_ts_shift_vs_actual: 0,
            pos_diff_total_coins_rate: 72,
            pos_difficulty: '1338766821857070584',
            pos_sequence_factor: 0,
            pow_difficulty: 1282748568346,
            pow_sequence_factor: 0,
            seconds_for_10_blocks: 0,
            seconds_for_30_blocks: 0,
            status: 'OK',
            synchronization_start_height: 9197,
            synchronized_connections_count: 17,
            total_coins: '17535637000000000000',
            transactions_cnt_per_day: 0,
            transactions_volume_per_day: 0,
            tx_count: 7391,
            tx_count_in_last_block: 0,
            tx_pool_performance_data: {
                begin_tx_time: 0,
                check_inputs_time: 0,
                check_inputs_types_supported_time: 0,
                check_keyimages_ws_ms_time: 0,
                db_commit_time: 0,
                expiration_validate_time: 0,
                tx_processing_time: 0,
                update_db_time: 0,
                validate_alias_time: 0,
                validate_amount_time: 0
            },
            tx_pool_size: 0,
            white_peerlist_size: 118,
            lastBlock: 18434
        };
        this.getBlocksDetails = {
            id: 0,
            jsonrpc: '2.0',
            result: {
                blocks: [
                    {
                        actual_timestamp: 1557342434,
                        already_generated_coins: '17517218000000000000',
                        base_reward: 1000000000000,
                        blob: '',
                        block_cumulative_size: 0,
                        block_tself_size: 0,
                        cumulative_diff_adjusted: '3282279591',
                        cumulative_diff_precise: '167524457917',
                        difficulty: '130538538636',
                        effective_fee_median: 10000,
                        height: 15,
                        id: 'eb3e4d961b49f9204bbeb03cf481f98163d8ecc64a4e03dd945b4afba21a9a16',
                        is_orphan: false,
                        miner_text_info: '',
                        object_in_json: '{\n  "major_version": 0, \n  "nonce": 13283431681344269557, \n  "prev_id": "5509f67bed3974b38c6b4a606d4aff1d6bcd20f9683cbc3fb872696ac18ff10c", \n  "minor_version": 0, \n  "timestamp": 1557342434, \n  "flags": 0, \n  "miner_tx": {\n    "version": 1, \n    "vin": [ {\n        "gen": {\n          "height": 15\n        }\n      }\n    ], \n    "vout": [ {\n        "amount": 1000000000000, \n        "target": {\n          "key": "79607cce59563520409181b5f389c7425af1c0e9c2f2649864f6c41170516e3300"\n        }\n      }\n    ], \n    "extra": [ {\n        "pub_key": "176379fe46749a3ba9d5ec14dda4577089faa9c7bbf44bbd0df1625e4f446693"\n      }, {\n        "extra_padding": , \n        "buff": [ ]\n      }, {\n        "derive_hint": , \n        "v": 57884\n      }, {\n        "unlock_time": , \n        "v": 25\n      }, {\n        "string": 8"7eae0ab0205f1c96"\n      }], \n    "signatures": [ ], \n    "attachment": [ ]\n  }, \n  "tx_hashes": [ ]\n}',
                        penalty: 0,
                        pow_seed: '',
                        prev_id: '5509f67bed3974b38c6b4a606d4aff1d6bcd20f9683cbc3fb872696ac18ff10c',
                        summary_reward: 1000000000000,
                        this_block_fee_median: 0,
                        timestamp: 1557342434,
                        total_fee: 0,
                        total_txs_size: 0,
                        transactions_details: [
                            {
                                amount: 1000000000000,
                                blob: '',
                                blob_size: 96,
                                fee: 0,
                                id: 'c74bff5d8ee39d4d5f826a9f126f08579c2a07224941b5081a8702c6be8c336e',
                                keeper_block: 15,
                                object_in_json: '',
                                pub_key: '176379fe46749a3ba9d5ec14dda4577089faa9c7bbf44bbd0df1625e4f446693',
                                timestamp: 1557342434
                            }
                        ],
                        type: 1
                    },
                    {
                        actual_timestamp: 1557342468,
                        already_generated_coins: '17517219000000000000',
                        base_reward: 1000000000000,
                        blob: '',
                        block_cumulative_size: 0,
                        block_tself_size: 0,
                        cumulative_diff_adjusted: '8655175341',
                        cumulative_diff_precise: '569583156916',
                        difficulty: '402058698999',
                        effective_fee_median: 10000,
                        height: 16,
                        id: 'f5fc0e006e09447a114625b18783aae982b6ce5a6188c0fc25ed30e7be091eb1',
                        is_orphan: false,
                        miner_text_info: '',
                        object_in_json: '{\n  "major_version": 0, \n  "nonce": 5846889378099009994, \n  "prev_id": "eb3e4d961b49f9204bbeb03cf481f98163d8ecc64a4e03dd945b4afba21a9a16", \n  "minor_version": 0, \n  "timestamp": 1557342468, \n  "flags": 0, \n  "miner_tx": {\n    "version": 1, \n    "vin": [ {\n        "gen": {\n          "height": 16\n        }\n      }\n    ], \n    "vout": [ {\n        "amount": 1000000000000, \n        "target": {\n          "key": "79018038084942c6131a71721bade001a1e7daefcbda6ab7317449062d1a018400"\n        }\n      }\n    ], \n    "extra": [ {\n        "pub_key": "b7bb28e9aa8b204cc61fdbf750da6ad40c7d281d9856b1873396f4faa7a6fe1e"\n      }, {\n        "extra_padding": , \n        "buff": [ ]\n      }, {\n        "derive_hint": , \n        "v": 33676\n      }, {\n        "unlock_time": , \n        "v": 26\n      }, {\n        "string": 8"addacf3d7bfd8059"\n      }], \n    "signatures": [ ], \n    "attachment": [ ]\n  }, \n  "tx_hashes": [ ]\n}',
                        penalty: 0,
                        pow_seed: '',
                        prev_id: 'eb3e4d961b49f9204bbeb03cf481f98163d8ecc64a4e03dd945b4afba21a9a16',
                        summary_reward: 1000000000000,
                        this_block_fee_median: 0,
                        timestamp: 1557342468,
                        total_fee: 0,
                        total_txs_size: 0,
                        transactions_details: [
                            {
                                amount: 1000000000000,
                                blob: '',
                                blob_size: 96,
                                fee: 0,
                                id: '6fb0924fc1f7cf3817a6a6f8d1b1d844620f9d05f47300e4722592ce7ef975fb',
                                keeper_block: 16,
                                object_in_json: '',
                                pub_key: 'b7bb28e9aa8b204cc61fdbf750da6ad40c7d281d9856b1873396f4faa7a6fe1e',
                                timestamp: 1557342468
                            }
                        ],
                        type: 1
                    }
                ],
                status: 'OK'
            }
        };
        this.getMainBlockDetails = {
            id: 0,
            jsonrpc: '2.0',
            result: {
                block_details: {
                    actual_timestamp: 1558426064,
                    already_generated_coins: '17535674000000000000',
                    base_reward: 1000000000000,
                    blob: '',
                    block_cumulative_size: 0,
                    block_tself_size: 0,
                    cumulative_diff_adjusted: '42262578814238839',
                    cumulative_diff_precise: '25589848530845512',
                    difficulty: '1320298929845',
                    effective_fee_median: 100000000,
                    height: 18471,
                    id: '2596f594631f2a080a17e8e366ef2b724722b64fc68f7188cf3d096066d473d3',
                    is_orphan: false,
                    miner_text_info: 'FairPool - \\�\u0010�',
                    object_in_json: '{\n  "major_version": 1, \n  "nonce": 15244596551029238929, \n  "prev_id": "2df901ea6575315e36b2b4d80d52be6fe02903c55edfc6d8fb0f82690d9cf80c", \n  "minor_version": 0, \n  "timestamp": 1558426064, \n  "flags": 0, \n  "miner_tx": {\n    "version": 1, \n    "vin": [ {\n        "gen": {\n          "height": 18471\n        }\n      }\n    ], \n    "vout": [ {\n        "amount": 1000000000000, \n        "target": {\n          "key": "c1f522f367bbff21bc37a4403d002f9fa74b1f6aebf8e4008fa8601037a7af4c00"\n        }\n      }\n    ], \n    "extra": [ {\n        "pub_key": "62bdb11df19f68c2e6e0ed47c0dee6da180b14eff9d7b6caf8349896521369f1"\n      }, {\n        "user_data": , \n        "buff": 15"46616972506f6f6c202d205ce510b4"\n      }, {\n        "extra_padding": , \n        "buff": [ ]\n      }, {\n        "derive_hint": , \n        "v": 9647\n      }, {\n        "unlock_time": , \n        "v": 18481\n      }], \n    "signatures": [ ], \n    "attachment": [ ]\n  }, \n  "tx_hashes": [ ]\n}',
                    penalty: 0,
                    pow_seed: '',
                    prev_id: '2df901ea6575315e36b2b4d80d52be6fe02903c55edfc6d8fb0f82690d9cf80c',
                    summary_reward: 1000000000000,
                    this_block_fee_median: 0,
                    timestamp: 1558426064,
                    total_fee: 0,
                    total_txs_size: 0,
                    transactions_details: [
                        {
                            amount: 1000000000000,
                            blob: '',
                            blob_size: 107,
                            fee: 0,
                            id: '8b76ebb4c0a092ee44ec69d216585ad240effab80d2b440fe6fd660a485df90b',
                            keeper_block: 18471,
                            object_in_json: '',
                            pub_key: '62bdb11df19f68c2e6e0ed47c0dee6da180b14eff9d7b6caf8349896521369f1',
                            timestamp: 1558426064
                        }
                    ],
                    type: 1
                },
                status: 'OK'
            }
        };
        this.getAltBlocksDetails = {
            id: 0,
            jsonrpc: '2.0',
            result: {
                blocks: [
                    {
                        actual_timestamp: 1558094670,
                        already_generated_coins: '0',
                        base_reward: 1000000000000,
                        blob: '',
                        block_cumulative_size: 0,
                        block_tself_size: 0,
                        cumulative_diff_adjusted: '34706049725298869',
                        cumulative_diff_precise: '4262505828114166444943',
                        difficulty: '1285998119732999977',
                        effective_fee_median: 0,
                        height: 13045,
                        id: '25d37f80e09699c94a37cb04032bec600b5ee5f8490228476e124f71009c7a07',
                        is_orphan: true,
                        miner_text_info: '',
                        object_in_json: '{\n  "major_version": 1, \n  "nonce": 0, \n  "prev_id": "e7e22189111c6bef8c7448f726cd601b7bbe9ee47c74594e63968e40da125be6", \n  "minor_version": 0, \n  "timestamp": 1558095225, \n  "flags": 1, \n  "miner_tx": {\n    "version": 1, \n    "vin": [ {\n        "gen": {\n          "height": 13045\n        }\n      }, {\n        "key": {\n          "amount": 1000000000000, \n          "key_offsets": [ {\n              "uint64_t": 9588\n            }\n          ], \n          "k_image": "ee5af7d5279a75c73eb4696259b2c3f64506a3a050f8907f966d6bc47a1b2c15", \n          "etc_details": [ ]\n        }\n      }], \n    "vout": [ {\n        "amount": 1000000000000, \n        "target": {\n          "key": "a3c574d19d3ca2efcd71757c7d335751e8b690af89997aa6b3211aed3e54d21a00"\n        }\n      }, {\n        "amount": 1000000000000, \n        "target": {\n          "key": "33bba73077ae586d023bc20ec6eb405dc8a88ca4bcfbf953469d021046bd9fc400"\n        }\n      }\n    ], \n    "extra": [ {\n        "pub_key": "169056b8ff17af447d9d389b2c22ccbd4669b6b1f8f2fa6b1bb73da4fe1be9d8"\n      }, {\n        "extra_padding": , \n        "buff": [ ]\n      }, {\n        "derive_hint": , \n        "v": 31559\n      }, {\n        "unlock_time": , \n        "v": 13055\n      }, {\n        "etc_tx_time": , \n        "v": 1558094670\n      }], \n    "signatures": [ [ "97b3adb5c2431e856ab16f32a545e3dc557f53a5edeb98f02094e3617ba8120979d15ca8040da341e3fe19982a407b5c56776fbe6082d4f74d50f2db6e2f6a04"\n      ]\n    ], \n    "attachment": [ ]\n  }, \n  "tx_hashes": [ ]\n}',
                        penalty: 0,
                        pow_seed: '',
                        prev_id: 'e7e22189111c6bef8c7448f726cd601b7bbe9ee47c74594e63968e40da125be6',
                        summary_reward: 1000000000000,
                        this_block_fee_median: 0,
                        timestamp: 1558095225,
                        total_fee: 0,
                        total_txs_size: 0,
                        transactions_details: [
                            {
                                amount: 2000000000000,
                                blob: '',
                                blob_size: 184,
                                extra: [
                                    {
                                        datails_view: '',
                                        short_view: '169056b8ff17af447d9d389b2c22ccbd4669b6b1f8f2fa6b1bb73da4fe1be9d8',
                                        type: 'pub_key'
                                    },
                                    {
                                        datails_view: '',
                                        short_view: '0 bytes',
                                        type: 'extra_padding'
                                    },
                                    {
                                        datails_view: '477b',
                                        short_view: '477b',
                                        type: 'XOR'
                                    },
                                    {
                                        datails_view: '',
                                        short_view: 'height: 13055',
                                        type: 'unlock_time'
                                    },
                                    {
                                        datails_view: '',
                                        short_view: 'timestamp: 1558094670 ��, 17 ��� 2019 12:04:30 GMT',
                                        type: 'pos_time'
                                    }
                                ],
                                fee: 0,
                                id: '6b547e0349018c699bbbe5e73ba6afdc55472c76539f77481a0fcf8242ca142d',
                                ins: [
                                    {
                                        amount: 0,
                                        kimage_or_ms_id: '',
                                        multisig_count: 0
                                    },
                                    {
                                        amount: 1000000000000,
                                        global_indexes: [9588],
                                        kimage_or_ms_id: 'ee5af7d5279a75c73eb4696259b2c3f64506a3a050f8907f966d6bc47a1b2c15',
                                        multisig_count: 0
                                    }
                                ],
                                keeper_block: 0,
                                object_in_json: '',
                                outs: [
                                    {
                                        amount: 1000000000000,
                                        global_index: 0,
                                        is_spent: false,
                                        minimum_sigs: 0,
                                        pub_keys: [
                                            'a3c574d19d3ca2efcd71757c7d335751e8b690af89997aa6b3211aed3e54d21a'
                                        ]
                                    },
                                    {
                                        amount: 1000000000000,
                                        global_index: 0,
                                        is_spent: false,
                                        minimum_sigs: 0,
                                        pub_keys: [
                                            '33bba73077ae586d023bc20ec6eb405dc8a88ca4bcfbf953469d021046bd9fc4'
                                        ]
                                    }
                                ],
                                pub_key: '169056b8ff17af447d9d389b2c22ccbd4669b6b1f8f2fa6b1bb73da4fe1be9d8',
                                timestamp: 1558094670
                            }
                        ],
                        type: 0
                    },
                    {
                        actual_timestamp: 1558094702,
                        already_generated_coins: '0',
                        base_reward: 1000000000000,
                        blob: '',
                        block_cumulative_size: 0,
                        block_tself_size: 0,
                        cumulative_diff_adjusted: '34709324357663033',
                        cumulative_diff_precise: '4269216947363903966578',
                        difficulty: '1394217143233142329',
                        effective_fee_median: 0,
                        height: 13050,
                        id: '4b7e781b3e8565d92eab813711135e0dab4b4f91d5b904fb735fa46112df3fa7',
                        is_orphan: true,
                        miner_text_info: '',
                        object_in_json: '{\n  "major_version": 1, \n  "nonce": 0, \n  "prev_id": "0384295fa43e5cdfdd640682cf49eb4062d9bc0daffff591d9d59601f748e157", \n  "minor_version": 0, \n  "timestamp": 1558094190, \n  "flags": 1, \n  "miner_tx": {\n    "version": 1, \n    "vin": [ {\n        "gen": {\n          "height": 13050\n        }\n      }, {\n        "key": {\n          "amount": 1000000000000, \n          "key_offsets": [ {\n              "uint64_t": 19767\n            }\n          ], \n          "k_image": "151ac71fcaff8e9a3ae578cbf452aa21a7e57a0485c00bde4007e4c9a10bf4d5", \n          "etc_details": [ ]\n        }\n      }], \n    "vout": [ {\n        "amount": 1000000000000, \n        "target": {\n          "key": "7d78c55a11372e148b4dd786040798c8f16c9e049c4220efb6aa1b1e05983ae400"\n        }\n      }, {\n        "amount": 1000000000000, \n        "target": {\n          "key": "a7f63d84a10e57507166b6c6c22f420cf582d585ec7e8cdaa91712cce311c00100"\n        }\n      }\n    ], \n    "extra": [ {\n        "pub_key": "f3f1c72301ff2691c532212374a57f7001a236d96106ded2a2c10dc756593551"\n      }, {\n        "extra_padding": , \n        "buff": [ ]\n      }, {\n        "derive_hint": , \n        "v": 51036\n      }, {\n        "unlock_time": , \n        "v": 13060\n      }, {\n        "etc_tx_time": , \n        "v": 1558094702\n      }], \n    "signatures": [ [ "ba43a17fb277fe191e5365fd966e7e3165d0252f85bb8dd77e2cde63d7fe630094cff11bd6dff360cb4b1213236e4dfc5d8cec27e625cc9e7d8296d08ebfab03"\n      ]\n    ], \n    "attachment": [ ]\n  }, \n  "tx_hashes": [ ]\n}',
                        penalty: 0,
                        pow_seed: '',
                        prev_id: '0384295fa43e5cdfdd640682cf49eb4062d9bc0daffff591d9d59601f748e157',
                        summary_reward: 1000000000000,
                        this_block_fee_median: 0,
                        timestamp: 1558094190,
                        total_fee: 0,
                        total_txs_size: 0,
                        transactions_details: [
                            {
                                amount: 2000000000000,
                                blob: '',
                                blob_size: 184,
                                extra: [
                                    {
                                        datails_view: '',
                                        short_view: 'f3f1c72301ff2691c532212374a57f7001a236d96106ded2a2c10dc756593551',
                                        type: 'pub_key'
                                    },
                                    {
                                        datails_view: '',
                                        short_view: '0 bytes',
                                        type: 'extra_padding'
                                    },
                                    {
                                        datails_view: '5cc7',
                                        short_view: '5cc7',
                                        type: 'XOR'
                                    },
                                    {
                                        datails_view: '',
                                        short_view: 'height: 13060',
                                        type: 'unlock_time'
                                    },
                                    {
                                        datails_view: '',
                                        short_view: 'timestamp: 1558094702 ��, 17 ��� 2019 12:05:02 GMT',
                                        type: 'pos_time'
                                    }
                                ],
                                fee: 0,
                                id: 'b00883f1b2582329cb500eaab862b3884418b5511541a3372a211b63f0703916',
                                ins: [
                                    {
                                        amount: 0,
                                        kimage_or_ms_id: '',
                                        multisig_count: 0
                                    },
                                    {
                                        amount: 1000000000000,
                                        global_indexes: [19767],
                                        kimage_or_ms_id: '151ac71fcaff8e9a3ae578cbf452aa21a7e57a0485c00bde4007e4c9a10bf4d5',
                                        multisig_count: 0
                                    }
                                ],
                                keeper_block: 0,
                                object_in_json: '',
                                outs: [
                                    {
                                        amount: 1000000000000,
                                        global_index: 0,
                                        is_spent: false,
                                        minimum_sigs: 0,
                                        pub_keys: [
                                            '7d78c55a11372e148b4dd786040798c8f16c9e049c4220efb6aa1b1e05983ae4'
                                        ]
                                    },
                                    {
                                        amount: 1000000000000,
                                        global_index: 0,
                                        is_spent: false,
                                        minimum_sigs: 0,
                                        pub_keys: [
                                            'a7f63d84a10e57507166b6c6c22f420cf582d585ec7e8cdaa91712cce311c001'
                                        ]
                                    }
                                ],
                                pub_key: 'f3f1c72301ff2691c532212374a57f7001a236d96106ded2a2c10dc756593551',
                                timestamp: 1558094702
                            }
                        ],
                        type: 0
                    }
                ],
                status: 'OK'
            }
        };
        this.getAltBlockDetails = {
            id: 0,
            jsonrpc: '2.0',
            result: {
                block_details: {
                    actual_timestamp: 1558419387,
                    already_generated_coins: '0',
                    base_reward: 1000000000000,
                    blob: '',
                    block_cumulative_size: 0,
                    block_tself_size: 0,
                    cumulative_diff_adjusted: '42162003365591001',
                    cumulative_diff_precise: '7926104295724469470914',
                    difficulty: '1411116440694279750',
                    effective_fee_median: 0,
                    height: 18370,
                    id: '6b4ef341720ac37d6aaa9ebfa27c2a1b8e80a0cd4b39e02e8c9c60c7b8db8245',
                    is_orphan: true,
                    miner_text_info: '',
                    object_in_json: '{\n  "major_version": 1, \n  "nonce": 0, \n  "prev_id": "f5fcfeb73404cf8b164fc28937e787c20d340779161942f2882c2aa165f27bdc", \n  "minor_version": 0, \n  "timestamp": 1558419630, \n  "flags": 1, \n  "miner_tx": {\n    "version": 1, \n    "vin": [ {\n        "gen": {\n          "height": 18370\n        }\n      }, {\n        "key": {\n          "amount": 1000000000000, \n          "key_offsets": [ {\n              "uint64_t": 5594\n            }\n          ], \n          "k_image": "867314b926fed0f076caefa3db4a91d0ab294bb724df38ec0a9c23213af33d0d", \n          "etc_details": [ ]\n        }\n      }], \n    "vout": [ {\n        "amount": 1000000000000, \n        "target": {\n          "key": "85665bf78f7d0eb3349d5ce84fa161c4c574e69a4d666002996eea64a446047800"\n        }\n      }, {\n        "amount": 1000000000000, \n        "target": {\n          "key": "4a71946f1f33dfb6d6524620637eb19b0f85060c2303eef07c972ae863abe96a00"\n        }\n      }\n    ], \n    "extra": [ {\n        "pub_key": "d5d4fa8984e7325457a8ad940ab8301428e490d0ac5dd63088e55a8f9d300f14"\n      }, {\n        "extra_padding": , \n        "buff": [ ]\n      }, {\n        "derive_hint": , \n        "v": 34232\n      }, {\n        "unlock_time": , \n        "v": 18380\n      }, {\n        "etc_tx_time": , \n        "v": 1558419387\n      }], \n    "signatures": [ [ "b5cf0f978977da69df1c38719ca7a753aadd9a3d40ca66037739e732908b6c099fd2948b1c2b224b73c7bc6ddd46987448fa7599020f0775a3971a010c836603"\n      ]\n    ], \n    "attachment": [ ]\n  }, \n  "tx_hashes": [ ]\n}',
                    penalty: 0,
                    pow_seed: '',
                    prev_id: 'f5fcfeb73404cf8b164fc28937e787c20d340779161942f2882c2aa165f27bdc',
                    summary_reward: 1000000000000,
                    this_block_fee_median: 0,
                    timestamp: 1558419630,
                    total_fee: 0,
                    total_txs_size: 0,
                    transactions_details: [
                        {
                            amount: 2000000000000,
                            blob: '',
                            blob_size: 186,
                            extra: [
                                {
                                    datails_view: '',
                                    short_view: 'd5d4fa8984e7325457a8ad940ab8301428e490d0ac5dd63088e55a8f9d300f14',
                                    type: 'pub_key'
                                },
                                {
                                    datails_view: '',
                                    short_view: '0 bytes',
                                    type: 'extra_padding'
                                },
                                {
                                    datails_view: 'b885',
                                    short_view: 'b885',
                                    type: 'XOR'
                                },
                                {
                                    datails_view: '',
                                    short_view: 'height: 18380',
                                    type: 'unlock_time'
                                },
                                {
                                    datails_view: '',
                                    short_view: 'timestamp: 1558419387 ��, 21 ��� 2019 06:16:27 GMT',
                                    type: 'pos_time'
                                }
                            ],
                            fee: 0,
                            id: 'ece86dd6c1f4b6ed9295f55700579fa6aba3b99e893de6fbbbfc74f2679a8dd5',
                            ins: [
                                {
                                    amount: 0,
                                    kimage_or_ms_id: '',
                                    multisig_count: 0
                                },
                                {
                                    amount: 1000000000000,
                                    global_indexes: [5594],
                                    kimage_or_ms_id: '867314b926fed0f076caefa3db4a91d0ab294bb724df38ec0a9c23213af33d0d',
                                    multisig_count: 0
                                }
                            ],
                            keeper_block: 0,
                            object_in_json: '',
                            outs: [
                                {
                                    amount: 1000000000000,
                                    global_index: 0,
                                    is_spent: false,
                                    minimum_sigs: 0,
                                    pub_keys: [
                                        '85665bf78f7d0eb3349d5ce84fa161c4c574e69a4d666002996eea64a4460478'
                                    ]
                                },
                                {
                                    amount: 1000000000000,
                                    global_index: 0,
                                    is_spent: false,
                                    minimum_sigs: 0,
                                    pub_keys: [
                                        '4a71946f1f33dfb6d6524620637eb19b0f85060c2303eef07c972ae863abe96a'
                                    ]
                                }
                            ],
                            pub_key: 'd5d4fa8984e7325457a8ad940ab8301428e490d0ac5dd63088e55a8f9d300f14',
                            timestamp: 1558419387
                        }
                    ],
                    type: 0
                },
                status: 'OK'
            }
        };
        this.geAllPoolTXlist = {
            id: 0,
            jsonrpc: '2.0',
            result: {
                status: 'OK',
                txs: [
                    {
                        amount: 1999900000000,
                        blob: '',
                        blob_size: 1110,
                        fee: 100000000,
                        id: '31ab972b0f83f51f3daf4f500f335ced79bab8ef36d4b917f302eadf262fd256',
                        keeper_block: 0,
                        object_in_json: '',
                        pub_key: '82f339a52f488b74354feed5475fbe964486011e8e924d539ffc3ef021538c72',
                        timestamp: 1558427600
                    }
                ]
            }
        };
        this.getPoolTXSbriefDetails = {
            id: 0,
            jsonrpc: '2.0',
            result: {
                status: 'OK',
                txs: [
                    {
                        fee: 100000000,
                        id: '31ab972b0f83f51f3daf4f500f335ced79bab8ef36d4b917f302eadf262fd256',
                        sz: 1110,
                        total_amount: 1999900000000
                    }
                ]
            }
        };
        this.getTXdetails = {
            id: 0,
            jsonrpc: '2.0',
            result: {
                status: 'OK',
                tx_info: {
                    amount: 1000000000000,
                    blob: '',
                    blob_size: 100,
                    extra: [
                        {
                            datails_view: '',
                            short_view: '9da362eb8093d01748f630cdca5f2cc2fc53fd2d02c9884b0949c71ec307df96',
                            type: 'pub_key'
                        },
                        {
                            datails_view: '',
                            short_view: '0 bytes',
                            type: 'extra_padding'
                        },
                        {
                            datails_view: 'baeb',
                            short_view: 'baeb',
                            type: 'XOR'
                        },
                        {
                            datails_view: '',
                            short_view: 'height: 18499',
                            type: 'unlock_time'
                        },
                        {
                            datails_view: '4edab7612d547fcd',
                            short_view: '8 bytes',
                            type: 'string'
                        }
                    ],
                    fee: 0,
                    id: 'a4b5667df1bc19dc060894782971ae9e680f4ef3cce9d0619753ae3edc8aed58',
                    ins: [
                        {
                            amount: 0,
                            kimage_or_ms_id: '',
                            multisig_count: 0
                        }
                    ],
                    keeper_block: 18489,
                    object_in_json: '',
                    outs: [
                        {
                            amount: 1000000000000,
                            global_index: 27938,
                            is_spent: false,
                            minimum_sigs: 0,
                            pub_keys: [
                                '410031ac05c1b2bc213aff6770761cb61f42a8f2a266be4e6a0e9a7ff63b3e54'
                            ]
                        }
                    ],
                    pub_key: '9da362eb8093d01748f630cdca5f2cc2fc53fd2d02c9884b0949c71ec307df96',
                    timestamp: 1558427116
                }
            }
        };
    }
    clickEvent(name) {
        this.dropdowns[name] = !this.dropdowns[name];
    }
}
ApiComponent.ɵfac = function ApiComponent_Factory(t) { return new (t || ApiComponent)(); };
ApiComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ApiComponent, selectors: [["app-api"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 215, vars: 31, consts: [[1, "head_page"], [1, "item_box"], [1, "heading"], [1, "info"], [1, "row"], [1, "title"], [1, "value"], [1, "row", "method"], ["target", "_blank", 3, "href"], [1, "response"], [1, "title", 3, "click"], [1, "toggler"], [3, "json", "expanded", 4, "ngIf"], [3, "json", "expanded"]], template: function ApiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "API Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "How to use");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "API ENDPOINT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4)(12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "URL Request Format");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 1)(17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Request current coin stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 3)(20, "div", 7)(21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 6)(24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "get_info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 4)(27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Example:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 9)(32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApiComponent_Template_div_click_32_listener() { return ctx.clickEvent("info"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " JSON Response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ApiComponent_ngx_json_viewer_35_Template, 1, 2, "ngx-json-viewer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 1)(37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Request current total coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 3)(40, "div", 7)(41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "get_total_coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 4)(46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Example:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 9)(51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApiComponent_Template_div_click_51_listener() { return ctx.clickEvent("current_info"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " JSON Response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, ApiComponent_ngx_json_viewer_54_Template, 1, 2, "ngx-json-viewer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 1)(56, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Request blocks (offset and count)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 3)(59, "div", 7)(60, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 6)(63, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "get_blocks_details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 4)(66, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Example:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 9)(71, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApiComponent_Template_div_click_71_listener() { return ctx.clickEvent("blocks"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " JSON Response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](74, ApiComponent_ngx_json_viewer_74_Template, 1, 2, "ngx-json-viewer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 1)(76, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Request a given block by hash");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 3)(79, "div", 7)(80, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 6)(83, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "get_main_block_details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 4)(86, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Example:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 9)(91, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApiComponent_Template_div_click_91_listener() { return ctx.clickEvent("block"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, " JSON Response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, ApiComponent_ngx_json_viewer_94_Template, 1, 2, "ngx-json-viewer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 1)(96, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Request Alt-blocks (offset and count)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 3)(99, "div", 7)(100, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 6)(103, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "get_alt_blocks_details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 4)(106, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Example:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 9)(111, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApiComponent_Template_div_click_111_listener() { return ctx.clickEvent("altblocks"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, " JSON Response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](114, ApiComponent_ngx_json_viewer_114_Template, 1, 2, "ngx-json-viewer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 1)(116, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Request a given Alt-block by hash");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 3)(119, "div", 7)(120, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 6)(123, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "get_alt_block_details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 4)(126, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Example:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 9)(131, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApiComponent_Template_div_click_131_listener() { return ctx.clickEvent("altblock"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, " JSON Response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](134, ApiComponent_ngx_json_viewer_134_Template, 1, 2, "ngx-json-viewer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 1)(136, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "Request transaction from the pool");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 3)(139, "div", 7)(140, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 6)(143, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "get_pool_txs_details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 4)(146, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "Example:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 9)(151, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApiComponent_Template_div_click_151_listener() { return ctx.clickEvent("pool_transact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](152, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, " JSON Response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](154, ApiComponent_ngx_json_viewer_154_Template, 1, 2, "ngx-json-viewer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 1)(156, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, " Request brief information transactions from the pool ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 3)(159, "div", 7)(160, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "Method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 6)(163, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "get_pool_txs_brief_details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "div", 4)(166, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "Example:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 9)(171, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApiComponent_Template_div_click_171_listener() { return ctx.clickEvent("brief_pool_transact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](172, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, " JSON Response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](174, ApiComponent_ngx_json_viewer_174_Template, 1, 2, "ngx-json-viewer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "div", 1)(176, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "Request IDs for all txs from the pool");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 3)(179, "div", 7)(180, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "Method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "div", 6)(183, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184, "get_all_pool_tx_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "div", 4)(186, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "Example:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "div", 9)(191, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApiComponent_Template_div_click_191_listener() { return ctx.clickEvent("tx_ids_pool"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](192, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, " JSON Response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](194, ApiComponent_ngx_json_viewer_194_Template, 1, 2, "ngx-json-viewer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "div", 1)(196, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "Request a given transaction by hash");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "div", 3)(199, "div", 7)(200, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, "Method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "div", 6)(203, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "get_tx_details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "div", 4)(206, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](207, "Example:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "div", 9)(211, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApiComponent_Template_div_click_211_listener() { return ctx.clickEvent("transaction"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](212, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, " JSON Response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](214, ApiComponent_ngx_json_viewer_214_Template, 1, 2, "ngx-json-viewer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.apiEndpoint);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.objectLinks.url_request_format);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.createLink("#getinfo"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.objectLinks.utl_get_info);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dropdowns["info"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.objectLinks.utl_get_total_coins);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dropdowns["current_info"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.createLink("#get_blocks_details"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.objectLinks.url_get_blocks_details);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dropdowns["blocks"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.createLink("#get_main_block_details"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.objectLinks.url_get_main_block_details);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dropdowns["block"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.createLink("#get_alt_blocks_details"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.objectLinks.url_get_alt_blocks_details);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dropdowns["altblocks"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.createLink("#get_alt_block_details"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.objectLinks.url_get_alt_block_details);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dropdowns["altblock"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.createLink("#get_pool_txs_details"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.objectLinks.url_get_pool_txs_details);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dropdowns["pool_transact"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.createLink("#get_pool_txs_brief_details"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.objectLinks.url_get_pool_txs_brief_details);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dropdowns["brief_pool_transact"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.createLink("#get_all_pool_tx_list"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.objectLinks.url_request_ids_all_txs_pool);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dropdowns["tx_ids_pool"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.createLink("#get_tx_details"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.objectLinks.url_get_tx_details);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dropdowns["transaction"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ngx_json_viewer__WEBPACK_IMPORTED_MODULE_4__.NgxJsonViewerComponent], styles: ["@charset \"UTF-8\";\n.head_page[_ngcontent-%COMP%] {\n  height: 77px;\n  display: flex;\n  align-items: center;\n  color: #9eaacc;\n  font-size: 14px;\n}\n@media (max-width: 575px) {\n  .head_page[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 20px;\n  }\n}\n.item_box[_ngcontent-%COMP%] {\n  background-color: rgba(35, 78, 226, 0.1);\n  border-radius: 10px;\n  margin-bottom: 25px;\n  overflow: hidden;\n  font-size: 13px;\n}\n@media (max-width: 575px) {\n  .item_box[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n}\n.item_box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 300;\n  color: #fff;\n  padding: 18px 20px;\n  background: linear-gradient(to right, #1b3a8a, #32439f);\n}\n@media (max-width: 575px) {\n  .item_box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    min-width: 480px;\n  }\n}\n@media (max-width: 399px) {\n  .item_box[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n.item_box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  padding: 0 20px;\n  color: #fff;\n}\n@media (max-width: 575px) {\n  .item_box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    height: 60px;\n    padding: 7px 20px;\n    min-width: 480px;\n  }\n}\n.item_box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: #263163;\n}\n.item_box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div.title[_ngcontent-%COMP%] {\n  flex-basis: 30%;\n  font-size: 14px;\n}\n@media (max-width: 575px) {\n  .item_box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div.title[_ngcontent-%COMP%] {\n    display: flex;\n    flex-basis: 50%;\n    align-items: center;\n  }\n}\n.item_box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div.value[_ngcontent-%COMP%] {\n  flex-basis: 70%;\n}\n.item_box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div.value[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #68a1ff;\n}\n@media (max-width: 575px) {\n  .item_box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div.value[_ngcontent-%COMP%] {\n    display: flex;\n    flex-basis: 50%;\n    align-items: center;\n  }\n}\n@media (max-width: 575px) {\n  .item_box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .row.method[_ngcontent-%COMP%] {\n    height: 40px;\n    flex-direction: row;\n    align-items: center;\n  }\n  .item_box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .row.method[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    flex-basis: auto;\n    padding-right: 7px;\n  }\n}\n.item_box[_ngcontent-%COMP%]   .response[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 20px;\n  color: #fff;\n  font-size: 14px;\n  cursor: pointer;\n  padding-left: 40px;\n}\n.item_box[_ngcontent-%COMP%]   .response[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%] {\n  position: relative;\n  color: #787878;\n  margin-left: -20px;\n  font-size: 12px;\n  line-height: 1.2;\n}\n.item_box[_ngcontent-%COMP%]   .response[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]:after {\n  display: flex;\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  content: \"\u25BA\";\n  transition: transform 0.1s ease-in;\n}\nngx-json-viewer[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 17px 20px 17px;\n}\nngx-json-viewer.show[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\nngx-json-viewer.hide[_ngcontent-%COMP%] {\n  display: flex;\n  height: 0;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5jb21wb25lbnQuc2NzcyIsIi4uLy4uL2Fzc2V0cy9zdHlsZXMvYmFzZS9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0o7QUM0RUk7RURsRko7SUFPUSxXQUFBO0lBQ0EsZUFBQTtFQUdOO0FBQ0Y7QUFBQTtFQUNJLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUdKO0FDOERJO0VEdEVKO0lBT1EsZ0JBQUE7RUFLTjtBQUNGO0FBSkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtBQU1SO0FDa0RJO0VEN0RBO0lBT1EsZ0JBQUE7RUFRVjtBQUNGO0FDa0RJO0VEbEVBO0lBVVEsZUFBQTtFQVVWO0FBQ0Y7QUFQUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVNaO0FDaUNJO0VEL0NJO0lBT1Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VBV2Q7QUFDRjtBQVRZO0VBQ0kseUJBQUE7QUFXaEI7QUFSZ0I7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQVVwQjtBQ2lCSTtFRDdCWTtJQUlRLGFBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUFZdEI7QUFDRjtBQVZnQjtFQUNJLGVBQUE7QUFZcEI7QUFYb0I7RUFDSSxjQUFBO0FBYXhCO0FDSUk7RURwQlk7SUFNUSxhQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBY3RCO0FBQ0Y7QUNISTtFRFJRO0lBRVEsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUFhbEI7RUFaa0I7SUFDSSxnQkFBQTtJQUNBLGtCQUFBO0VBY3RCO0FBQ0Y7QUFMUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQU9aO0FBTlk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVFoQjtBQVBnQjtFQUNJLGFBQUE7RUNzRGhCLFdBRHFEO0VBRXJELGNBRm9CO0VBR3BCLGtCQUhpQztFRG5EakIsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUFXcEI7QUFIQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQU1KO0FBTEk7RUFDSSxvQkFBQTtBQU9SO0FBTEk7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBT1IiLCJmaWxlIjoiYXBpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3N0eWxlcy9iYXNlL21peGlucyc7XG4uaGVhZF9wYWdlIHtcbiAgICBoZWlnaHQ6IDc3cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjOWVhYWNjO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBAaW5jbHVkZSBtYXg1NzUge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbn1cblxuLml0ZW1fYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM1LCA3OCwgMjI2LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBAaW5jbHVkZSBtYXg1NzUge1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIH1cbiAgICAuaGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDE4cHggMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMWIzYThhLCAjMzI0MzlmKTtcbiAgICAgICAgQGluY2x1ZGUgbWF4NTc1IHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaW5mbyB7XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIEBpbmNsdWRlIG1heDU3NSB7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0ODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4pIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzMTYzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPiBkaXYge1xuICAgICAgICAgICAgICAgICYudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4NTc1IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYudmFsdWUge1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2OGExZmY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4NTc1IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5tZXRob2Qge1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDU3NSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucmVzcG9uc2Uge1xuICAgICAgICAvL3BhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgLnRvZ2dsZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc4Nzg3ODtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBzZXVkbztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+KWuic7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybSAwLjFzIGVhc2UtaW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5uZ3gtanNvbi12aWV3ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMCAxN3B4IDIwcHggMTdweDtcbiAgICAmLnNob3cge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgJi5oaWRlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbn1cbiIsIkBtaXhpbiB0ZXh0LXRydW5jYXRlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5AbWl4aW4gdGV4dFdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIGxpbmUtYnJlYWs6IHN0cmljdDtcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgaHlwaGVuczogYXV0bztcbn1cbkBtaXhpbiBjb3ZlckJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbkBtaXhpbiBhYnMoJHRvcDogYXV0bywgJHJpZ2h0OiBhdXRvLCAkYm90dG9tOiBhdXRvLCAkbGVmdDogYXV0bykge1xuICAgIHRvcDogJHRvcDtcbiAgICByaWdodDogJHJpZ2h0O1xuICAgIGJvdHRvbTogJGJvdHRvbTtcbiAgICBsZWZ0OiAkbGVmdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5AbWl4aW4gY292ZXJJbWcge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xufVxuQG1peGluIHZhbGluZ0JveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbkBtaXhpbiB1blNlbGVjdCB7XG4gICAgLXdlYmtpdC10b3VjaC1jb2xsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuQG1peGluIGNsZWFyZml4IHtcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG59XG5AbWl4aW4gbWF4MTE5OSB7XG4gICAgLy8gbWFrZXQgMTE3MVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1heDExNzAge1xuICAgIC8vIG1ha2V0cyA5OTJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE3MHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtYXg5OTEge1xuICAgIC8vIG1ha2V0cyA3NjJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1heDc2MSB7XG4gICAgLy8gbWFrZXRzIDU3NlxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbWF4NTc1IHtcbiAgICAvLyBtYWtldHMgNDAwXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtb2JpbGUge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzOTlweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gdHJpYW5nbGVVcCgkdzogMjBweCwgJGg6IDIwcHgsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlcjogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogJGggc29saWQgJGNvbG9yO1xufVxuQG1peGluIHRyaWFuZ2xlRG93bigkdzogMjBweCwgJGg6IDIwcHgsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3A6ICRoIHNvbGlkICRjb2xvcjtcbn1cbkBtaXhpbiB0cmlhbmdsZUxlZnQoJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6ICRoIHNvbGlkICRjb2xvcjtcbn1cbkBtaXhpbiB0cmlhbmdsZVJpZ2h0KCR3OiAyMHB4LCAkaDogMjBweCwgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6ICRoIHNvbGlkICRjb2xvcjtcbn1cbkBtaXhpbiB0cmlhbmdsZVRvcExlZnQoJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAkdyBzb2xpZCAkY29sb3I7XG4gICAgYm9yZGVyLXJpZ2h0OiAkaCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbkBtaXhpbiBwYXJhbGxlbG9ncmFtKCR3OiAxNTBweCwgJGg6IDEwMHB4LCAkc2tldzogMjBkZWcsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6ICR3O1xuICAgIGhlaWdodDogJGg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoJHNrZXcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBza2V3KCRza2V3KTtcbiAgICAtby10cmFuc2Zvcm06IHNrZXcoJHNrZXcpO1xuICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgICA+IHNwYW4sXG4gICAgYSxcbiAgICBhZGRyZXNzIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLSRza2V3KTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNrZXcoLSRza2V3KTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiBza2V3KC0kc2tldyk7XG4gICAgfVxufVxuQG1peGluIGJvdHRvbUxpbmUoJGg6IDhweCwgJGNvbG9yOiAjMDBiOWJmKSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6ICRoO1xufVxuQG1peGluIGNlbnRlci1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuQG1peGluIGljb0NlbnRlciB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuQG1peGluIHBzZXVkbygkZGlzcGxheTogYmxvY2ssICRwb3M6IGFic29sdXRlLCAkY29udGVudDogJycpIHtcbiAgICBjb250ZW50OiAkY29udGVudDtcbiAgICBkaXNwbGF5OiAkZGlzcGxheTtcbiAgICBwb3NpdGlvbjogJHBvcztcbn1cbkBtaXhpbiBiYXJ0YmxvY2sge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMjM0ZWUyLCAwLjEpO1xufVxuIl19 */"] });


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscription-tracker/subscription-tracker */ 8083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 5876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






const _c0 = function (a0) { return { show: a0 }; };
const _c1 = function () { return ["/"]; };
const _c2 = function () { return { exact: true }; };
const _c3 = function () { return ["alt-blocks"]; };
const _c4 = function () { return ["aliases"]; };
const _c5 = function () { return ["charts"]; };
const _c6 = function () { return ["api"]; };
class AppComponent extends _subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__.SubscriptionTracker {
    constructor(router, mobileNavState) {
        super();
        this.router = router;
        this.mobileNavState = mobileNavState;
        this.navIsOpen = true;
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
                if (this.navIsOpen === true) {
                    this.mobileNavState.toggleMenu();
                }
            }
        });
    }
    ngOnInit() {
        this.mobileNavState.change.subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen;
        });
    }
    btnToggleMenu() {
        this.mobileNavState.toggleMenu();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.MobileNavState)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 42, vars: 32, consts: [[1, "hidden"], ["type", "button", "id", "mobile-nav-btn", 3, "ngClass", "click"], ["routerLinkActive", "active", 1, "logo", 3, "routerLink"], [1, "desktop_nav"], ["routerLinkActive", "active", "id", "blockchain-li", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "routerLink"], [1, "mobile_nav", 3, "ngClass"], ["routerLinkActive", "active", "id", "blockchain-mobile-li", 3, "routerLink", "routerLinkActiveOptions"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Welcome to Block Explorer!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "header")(3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { return ctx.btnToggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Zano");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nav", 3)(7, "ul")(8, "li")(9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Blockchain");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li")(12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Alt-blocks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li")(15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Aliases");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li")(18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Charts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "li")(21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "main")(24, "nav", 6)(25, "ul")(26, "li")(27, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Blockchain");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "li")(30, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Alt-blocks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "li")(33, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Aliases");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "li")(36, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Charts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "li")(39, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c0, ctx.navIsOpen === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](21, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](23, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](24, _c0, ctx.navIsOpen === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](26, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](27, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](28, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](29, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](30, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](31, _c6));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["nav.mobile_nav[_ngcontent-%COMP%] {\n  height: 0;\n  transition: 0.25s;\n  overflow: hidden;\n  opacity: 0;\n  display: none;\n}\nnav.mobile_nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnav.mobile_nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 35px;\n  color: #fff;\n  padding: 0 15px;\n  margin: 10px 0;\n}\nnav.mobile_nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #1b3a8a, #32439f);\n  color: #fff;\n  font-weight: 400;\n}\nnav.mobile_nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child    > a[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\nnav.mobile_nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child    > a[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\nnav.mobile_nav.show[_ngcontent-%COMP%] {\n  display: flex;\n  height: 215px;\n  margin-top: 12px;\n  margin-bottom: 30px;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFBSjtBQUNJO0VBQ0ksV0FBQTtBQUNSO0FBQ1k7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDaEI7QUFBZ0I7RUFDSSx1REFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUVwQjtBQUVnQjtFQUNJLGFBQUE7QUFBcEI7QUFJZ0I7RUFDSSxnQkFBQTtBQUZwQjtBQU9JO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUxSIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvYmFzZS9taXhpbnMnO1xubmF2Lm1vYmlsZV9uYXYge1xuICAgIGhlaWdodDogMDtcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB1bCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICA+IGEge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFiM2E4YSwgIzMyNDM5Zik7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgID4gYSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICA+IGEge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmLnNob3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDIxNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.router */ 5285);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-json-viewer */ 6124);
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angular-highcharts */ 4072);
/* harmony import */ var highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/modules/stock.src */ 8757);
/* harmony import */ var highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ 5972);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_stock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/stock */ 675);
/* harmony import */ var highcharts_modules_stock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_stock__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ 5876);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _main_info_main_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-info/main-info.component */ 4275);
/* harmony import */ var _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blockchain/blockchain.component */ 8718);
/* harmony import */ var _block_details_block_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block-details/block-details.component */ 2632);
/* harmony import */ var _alt_blocks_alt_blocks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alt-blocks/alt-blocks.component */ 229);
/* harmony import */ var _alt_blocks_details_alt_blocks_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./alt-blocks-details/alt-blocks-details.component */ 5458);
/* harmony import */ var _aliases_aliases_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aliases/aliases.component */ 1036);
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transaction/transaction.component */ 7374);
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialog/dialog.component */ 5029);
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./server-error/server-error.component */ 1685);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/search.component */ 6392);
/* harmony import */ var _charts_charts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./charts/charts.component */ 4077);
/* harmony import */ var _charts_avg_block_size_avg_block_size_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./charts/avg-block-size/avg-block-size.component */ 9533);
/* harmony import */ var _charts_avg_trans_per_block_avg_trans_per_block_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./charts/avg-trans-per-block/avg-trans-per-block.component */ 3077);
/* harmony import */ var _charts_hashrate_hashrate_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./charts/hashrate/hashrate.component */ 8009);
/* harmony import */ var _charts_difficulty_difficulty_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./charts/difficulty/difficulty.component */ 3018);
/* harmony import */ var _charts_confirm_trans_per_day_confirm_trans_per_day_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./charts/confirm-trans-per-day/confirm-trans-per-day.component */ 1662);
/* harmony import */ var _charts_difficulty_pow_difficulty_pow_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./charts/difficulty-pow/difficulty-pow.component */ 1395);
/* harmony import */ var _api_api_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./api/api.component */ 3832);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-cookie-service */ 3694);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/pipes.module */ 5503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 3184);
// Modules











// Services



// Components






















highcharts_modules_stock__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ providers: [
        _http_service__WEBPACK_IMPORTED_MODULE_4__.HttpService,
        _http_service__WEBPACK_IMPORTED_MODULE_4__.ServiceResolver,
        _http_service__WEBPACK_IMPORTED_MODULE_4__.ResolveAltBlock,
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_26__.CookieService,
        _http_service__WEBPACK_IMPORTED_MODULE_4__.MobileNavState,
        { provide: angular_highcharts__WEBPACK_IMPORTED_MODULE_27__.ChartModule, useFactory: () => [highcharts_modules_stock_src__WEBPACK_IMPORTED_MODULE_1__] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule,
            ngx_json_viewer__WEBPACK_IMPORTED_MODULE_33__.NgxJsonViewerModule,
            angular_highcharts__WEBPACK_IMPORTED_MODULE_27__.ChartModule,
            _app_router__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_24__.PipesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent,
        _main_info_main_info_component__WEBPACK_IMPORTED_MODULE_6__.MainInfoComponent,
        _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_7__.BlockchainComponent,
        _block_details_block_details_component__WEBPACK_IMPORTED_MODULE_8__.BlockDetailsComponent,
        _alt_blocks_alt_blocks_component__WEBPACK_IMPORTED_MODULE_9__.AltBlocksComponent,
        _alt_blocks_details_alt_blocks_details_component__WEBPACK_IMPORTED_MODULE_10__.AltBlocksDetailsComponent,
        _aliases_aliases_component__WEBPACK_IMPORTED_MODULE_11__.AliasesComponent,
        _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_12__.TransactionComponent,
        _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__.DialogComponent,
        _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_14__.ServerErrorComponent,
        _search_search_component__WEBPACK_IMPORTED_MODULE_15__.SearchComponent,
        _charts_charts_component__WEBPACK_IMPORTED_MODULE_16__.ChartsComponent,
        _charts_avg_block_size_avg_block_size_component__WEBPACK_IMPORTED_MODULE_17__.AvgBlockSizeComponent,
        _charts_avg_trans_per_block_avg_trans_per_block_component__WEBPACK_IMPORTED_MODULE_18__.AvgTransPerBlockComponent,
        _charts_hashrate_hashrate_component__WEBPACK_IMPORTED_MODULE_19__.HashrateComponent,
        _charts_difficulty_difficulty_component__WEBPACK_IMPORTED_MODULE_20__.DifficultyComponent,
        _charts_difficulty_pow_difficulty_pow_component__WEBPACK_IMPORTED_MODULE_22__.DifficultyPowComponent,
        _charts_confirm_trans_per_day_confirm_trans_per_day_component__WEBPACK_IMPORTED_MODULE_21__.ConfirmTransPerDayComponent,
        _api_api_component__WEBPACK_IMPORTED_MODULE_23__.ApiComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule,
        ngx_json_viewer__WEBPACK_IMPORTED_MODULE_33__.NgxJsonViewerModule,
        angular_highcharts__WEBPACK_IMPORTED_MODULE_27__.ChartModule,
        _app_router__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_24__.PipesModule] }); })();


/***/ }),

/***/ 5285:
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockchain/blockchain.component */ 8718);
/* harmony import */ var _block_details_block_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-details/block-details.component */ 2632);
/* harmony import */ var _alt_blocks_alt_blocks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alt-blocks/alt-blocks.component */ 229);
/* harmony import */ var _alt_blocks_details_alt_blocks_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alt-blocks-details/alt-blocks-details.component */ 5458);
/* harmony import */ var _aliases_aliases_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aliases/aliases.component */ 1036);
/* harmony import */ var _charts_charts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts/charts.component */ 4077);
/* harmony import */ var _charts_avg_block_size_avg_block_size_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charts/avg-block-size/avg-block-size.component */ 9533);
/* harmony import */ var _charts_avg_trans_per_block_avg_trans_per_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charts/avg-trans-per-block/avg-trans-per-block.component */ 3077);
/* harmony import */ var _charts_hashrate_hashrate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./charts/hashrate/hashrate.component */ 8009);
/* harmony import */ var _charts_difficulty_difficulty_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./charts/difficulty/difficulty.component */ 3018);
/* harmony import */ var _charts_difficulty_pow_difficulty_pow_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./charts/difficulty-pow/difficulty-pow.component */ 1395);
/* harmony import */ var _charts_confirm_trans_per_day_confirm_trans_per_day_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./charts/confirm-trans-per-day/confirm-trans-per-day.component */ 1662);
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transaction/transaction.component */ 7374);
/* harmony import */ var _api_api_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./api/api.component */ 3832);
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./server-error/server-error.component */ 1685);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./http.service */ 5876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
// import {ModuleWithProviders} from '@angular/core';

// Components















// Resolve



const routes = [
    {
        path: '',
        component: _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_0__.BlockchainComponent,
        resolve: {
            MainInfo: _http_service__WEBPACK_IMPORTED_MODULE_15__.ServiceResolver
        }
    },
    {
        path: 'block/:id',
        component: _block_details_block_details_component__WEBPACK_IMPORTED_MODULE_1__.BlockDetailsComponent,
        resolve: {
            MainInfo: _http_service__WEBPACK_IMPORTED_MODULE_15__.ServiceResolver
        }
    },
    {
        path: 'alt-blocks',
        component: _alt_blocks_alt_blocks_component__WEBPACK_IMPORTED_MODULE_2__.AltBlocksComponent
    },
    {
        path: 'alt-blocks/:id',
        component: _alt_blocks_details_alt_blocks_details_component__WEBPACK_IMPORTED_MODULE_3__.AltBlocksDetailsComponent,
        resolve: {
            MainInfo: _http_service__WEBPACK_IMPORTED_MODULE_15__.ServiceResolver,
            AltBlock: _http_service__WEBPACK_IMPORTED_MODULE_15__.ResolveAltBlock
        }
    },
    {
        path: 'transaction/:tx_hash',
        component: _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_12__.TransactionComponent,
        resolve: {
            MainInfo: _http_service__WEBPACK_IMPORTED_MODULE_15__.ServiceResolver
        }
    },
    {
        path: 'aliases',
        component: _aliases_aliases_component__WEBPACK_IMPORTED_MODULE_4__.AliasesComponent,
        resolve: {
            MainInfo: _http_service__WEBPACK_IMPORTED_MODULE_15__.ServiceResolver
        }
    },
    {
        path: 'aliases/:id',
        component: _aliases_aliases_component__WEBPACK_IMPORTED_MODULE_4__.AliasesComponent,
        resolve: {
            MainInfo: _http_service__WEBPACK_IMPORTED_MODULE_15__.ServiceResolver
        }
    },
    {
        path: 'charts',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: _charts_charts_component__WEBPACK_IMPORTED_MODULE_5__.ChartsComponent
            },
            {
                path: 'avg-block-size',
                component: _charts_avg_block_size_avg_block_size_component__WEBPACK_IMPORTED_MODULE_6__.AvgBlockSizeComponent
            },
            {
                path: 'avg-trans-per-block',
                component: _charts_avg_trans_per_block_avg_trans_per_block_component__WEBPACK_IMPORTED_MODULE_7__.AvgTransPerBlockComponent
            },
            {
                path: 'hash-rate',
                component: _charts_hashrate_hashrate_component__WEBPACK_IMPORTED_MODULE_8__.HashrateComponent
            },
            {
                path: 'difficulty-pos',
                component: _charts_difficulty_difficulty_component__WEBPACK_IMPORTED_MODULE_9__.DifficultyComponent
            },
            {
                path: 'difficulty-pow',
                component: _charts_difficulty_pow_difficulty_pow_component__WEBPACK_IMPORTED_MODULE_10__.DifficultyPowComponent
            },
            {
                path: 'confirm-trans-per-day',
                component: _charts_confirm_trans_per_day_confirm_trans_per_day_component__WEBPACK_IMPORTED_MODULE_11__.ConfirmTransPerDayComponent
            }
        ]
    },
    {
        path: 'api',
        component: _api_api_component__WEBPACK_IMPORTED_MODULE_13__.ApiComponent
    },
    {
        path: 'server-error',
        component: _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_14__.ServerErrorComponent
    },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: '', component: _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_0__.BlockchainComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule] }); })();


/***/ }),

/***/ 2632:
/*!**********************************************************!*\
  !*** ./src/app/block-details/block-details.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockDetailsComponent": () => (/* binding */ BlockDetailsComponent)
/* harmony export */ });
/* harmony import */ var app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/subscription-tracker/subscription-tracker */ 8083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ 5876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.component */ 6392);
/* harmony import */ var app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pipes.pipe */ 2701);







const _c0 = function () { return ["/"]; };
const _c1 = function (a0) { return { hide_back_btn: a0 }; };
function BlockDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-search", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("isVisible", function BlockDetailsComponent_div_0_Template_app_search_isVisible_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.onIsVisible($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r0.searchIsOpen === true));
} }
const _c2 = function (a1) { return ["/block", a1]; };
function BlockDetailsComponent_div_41_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 47)(2, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c2, ctx_r6.prevBlockId));
} }
function BlockDetailsComponent_div_41_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 47)(2, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c2, ctx_r7.nextBlockId));
} }
function BlockDetailsComponent_div_41_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "PoS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BlockDetailsComponent_div_41_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "PoW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BlockDetailsComponent_div_41_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "amUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, ctx_r10.Block.timestamp * 1000), "YYYY.MM.DD HH:mm:ss"));
} }
function BlockDetailsComponent_div_41_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BlockDetailsComponent_div_41_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "amUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, ctx_r12.Block.actual_timestamp * 1000), "YYYY.MM.DD HH:mm:ss"));
} }
function BlockDetailsComponent_div_41_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BlockDetailsComponent_div_41_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r14.minerTextInfo, " ");
} }
function BlockDetailsComponent_div_41_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c3 = function (a1) { return ["/transaction", a1]; };
function BlockDetailsComponent_div_41_tr_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 41)(2, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tr_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c3, tr_r18.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tr_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 5, tr_r18.fee));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 7, tr_r18.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", tr_r18.blob_size, " bytes");
} }
function BlockDetailsComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "div", 18)(3, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Zano block");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BlockDetailsComponent_div_41_a_6_Template, 4, 3, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, BlockDetailsComponent_div_41_a_8_Template, 4, 3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 24)(12, "table", 25)(13, "tr", 26)(14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, BlockDetailsComponent_div_41_span_17_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, BlockDetailsComponent_div_41_span_18_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "tr")(20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Timestamp (UTC):");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, BlockDetailsComponent_div_41_span_23_Template, 4, 6, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, BlockDetailsComponent_div_41_span_24_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "tr")(26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Actual Timestamp (UTC):");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, BlockDetailsComponent_div_41_span_29_Template, 4, 6, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, BlockDetailsComponent_div_41_span_30_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "tr")(32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Difficulty:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "bitNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "tr")(38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Miner text info:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, BlockDetailsComponent_div_41_td_40_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, BlockDetailsComponent_div_41_ng_template_41_Template, 2, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "tr", 31)(44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Cumulative diff adjusted:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](48, "bitNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "tr", 32)(50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Cumulative diff presize:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](54, "bitNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "tr")(56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Orphan:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "tr")(61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Base reward:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](65, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "tr", 33)(67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Transactions fee:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](71, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "table", 34)(73, "tr")(74, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Reward penalty:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](78, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "tr")(80, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Reward:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](84, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "tr")(86, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "Total block size, bytes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "tr", 35)(91, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Effective txs median, bytes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "tr")(96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "This block fee median");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](100, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "tr")(102, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "Effective fee median");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](106, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "tr", 36)(108, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "Current txs median, bytes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "tr")(113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "Transactions:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "tr", 37)(118, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "Total transactions size, bytes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "tr", 38)(123, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, "Seed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "div", 39)(128, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "table", 40)(131, "thead")(132, "tr")(133, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, "Hash");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, "Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, "Total amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](142, BlockDetailsComponent_div_41_tr_142_Template, 12, 11, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](42);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.prevBlockId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.Block.height, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.nextBlockId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.Block.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.Block.type === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.Block.type === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.Block.timestamp > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.Block.timestamp === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.Block.actual_timestamp > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.Block.actual_timestamp === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 27, ctx_r1.Block.difficulty));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.minerTextInfo)("ngIfElse", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](48, 29, ctx_r1.Block.cumulative_diff_adjusted));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](54, 31, ctx_r1.Block.cumulative_diff_precise));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.Block.is_orphan ? "yes" : "no");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](65, 33, ctx_r1.Block.base_reward));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](71, 35, ctx_r1.Block.total_fee));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](78, 37, ctx_r1.Block.penalty));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](84, 39, ctx_r1.Block.summary_reward));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.Block.block_cumulative_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](100, 41, ctx_r1.ThisBlockFeeMedian));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](106, 43, ctx_r1.EffectiveFeeMedian));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.Block.transactions_details == null ? null : ctx_r1.Block.transactions_details.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.Block.total_txs_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.Block == null ? null : ctx_r1.Block.pow_seed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.Block.transactions_details);
} }
function BlockDetailsComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Block not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class BlockDetailsComponent extends app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__.SubscriptionTracker {
    constructor(route, httpService, mobileNavState) {
        super();
        this.route = route;
        this.httpService = httpService;
        this.mobileNavState = mobileNavState;
        this.Block = {};
        this.searchIsOpen = false;
        this.BlockNotFound = false;
        this.navBlockchain = document.getElementById('blockchain-li');
        this.navBlockchainMobile = document.getElementById('blockchain-mobile-li');
        this.navIsOpen = false;
    }
    onIsVisible($event) {
        this.searchIsOpen = $event;
    }
    getInfoPrepare(data) {
        this.info = data;
        if (this.info) {
            this.height = this.info.height;
            this.posDifficulty = this.info.pos_difficulty;
            this.powDifficulty = this.info.pow_difficulty;
            this.totalCoins = this.info.total_coins;
            this.txCount = this.info.tx_count;
            this.NetworkHashrate = this.info.current_network_hashrate_350;
        }
    }
    ngOnInit() {
        if (this.navBlockchain)
            this.navBlockchain.classList.add('active');
        if (this.navBlockchainMobile)
            this.navBlockchainMobile.classList.add('active');
        this.getInfoPrepare(this.route.snapshot.data['MainInfo']);
        this._track(this.httpService.subscribeInfo().subscribe((data) => {
            this.getInfoPrepare(data);
        }), this.route.params.subscribe((params) => {
            this.httpService.getMainBlockDetails(params.id).subscribe({
                next: (data) => {
                    this.Block = data;
                    this.prevBlockId = this.Block.prev_id;
                    this.minerTextInfo = this.Block.miner_text_info;
                    if (this.prevBlockId ===
                        '0000000000000000000000000000000000000000000000000000000000000000') {
                        this.prevBlockId = undefined;
                    }
                    this.nextBlockId = this.Block.next_id;
                    this.ThisBlockFeeMedian =
                        this.Block.this_block_fee_median;
                    this.EffectiveFeeMedian =
                        this.Block.effective_fee_median;
                    this.BlockNotFound = false;
                },
                error: (err) => {
                    this.BlockNotFound = true;
                }
            });
        }), this.mobileNavState.change.subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen;
        }));
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.navBlockchain.classList.remove('active');
        this.navBlockchainMobile.classList.remove('active');
    }
}
BlockDetailsComponent.ɵfac = function BlockDetailsComponent_Factory(t) { return new (t || BlockDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.MobileNavState)); };
BlockDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BlockDetailsComponent, selectors: [["app-block-details-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 44, vars: 24, consts: [["class", "top_box", 4, "ngIf"], [1, "main_info"], [1, "height"], [1, "title"], [1, "value"], [1, "difficulty"], [1, "pos"], [1, "pow"], [1, "coins_emitted"], [1, "transactions"], [1, "hash_rate"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "top_box"], [1, "left_box"], [1, "back_btn", 3, "routerLink", "ngClass"], [3, "isVisible"], [1, "block_details"], [1, "heading_block"], [1, "currency_name"], [1, "height_block"], ["class", "prev_block", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "next_block", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [1, "hash_block"], [1, "wrapper_table_block_details"], [1, "left_table"], [1, "block_type"], ["class", "pos", 4, "ngIf"], ["class", "pow", 4, "ngIf"], [4, "ngIf"], ["noneMinerTextInfo", ""], [1, "cumulative_diff_adjusted"], [1, "cumulative_diff_presize"], [1, "transactions_fee"], [1, "right_table"], [1, "effective_txs_median"], [1, "current_txs_median"], [1, "total_transactions_size"], [1, "tr_seed"], [1, "block_transactions_list"], [1, "table_block_transaction"], [1, "hash"], [1, "fee"], [1, "total_amount"], [1, "size"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "prev_block", 3, "routerLink"], ["x", "0px", "y", "0px", "viewBox", "0 0 477.175 477.175"], ["d", "M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\n              c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"], ["routerLinkActive", "active", 1, "next_block", 3, "routerLink"], ["d", "M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5\n              c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z\n              "], [3, "routerLink"], [1, "not-found"]], template: function BlockDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BlockDetailsComponent_div_0_Template, 5, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Difficulty");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 4)(12, "div", 6)(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "PoS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 7)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "PoW:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 8)(23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Coins Emitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "moneyParse");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 9)(30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 10)(36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Hash Rate (aprox):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](40, "hashPowerConverter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, BlockDetailsComponent_div_41_Template, 143, 45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, BlockDetailsComponent_ng_template_42_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.navIsOpen === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 9, ctx.height));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 11, ctx.posDifficulty));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 13, ctx.powDifficulty));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 15, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 17, ctx.totalCoins)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 19, ctx.txCount + ctx.height));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](40, 21, ctx.NetworkHashrate, "speed"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.BlockNotFound === false)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], pipes: [app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__.BitNumberPipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__.MoneyParsePipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__.HashPowerConverterPipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__.DateFormatPipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__.UtcPipe], styles: [".block_details[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  margin-top: 35px;\n}\n\n.heading_block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  padding-bottom: 15px;\n}\n\n@media (max-width: 991px) {\n  .heading_block[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n\n.heading_block[_ngcontent-%COMP%]   .currency_name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 300;\n  color: #fff;\n}\n\n.heading_block[_ngcontent-%COMP%]   .height_block[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 300;\n  color: #fff;\n  margin: 0 25px;\n  display: flex;\n}\n\n.heading_block[_ngcontent-%COMP%]   .height_block[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffff;\n  width: 18px;\n}\n\n.heading_block[_ngcontent-%COMP%]   .height_block[_ngcontent-%COMP%]    > a.prev_block[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.heading_block[_ngcontent-%COMP%]   .height_block[_ngcontent-%COMP%]    > a.next_block[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.heading_block[_ngcontent-%COMP%]   .hash_block[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9eaacc;\n  text-transform: uppercase;\n}\n\n@media (max-width: 991px) {\n  .heading_block[_ngcontent-%COMP%]   .hash_block[_ngcontent-%COMP%] {\n    padding-top: 12px;\n  }\n}\n\n@media (max-width: 575px) {\n  .heading_block[_ngcontent-%COMP%]   .hash_block[_ngcontent-%COMP%] {\n    white-space: normal;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    word-break: break-all;\n    line-break: strict;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n    line-height: 1.4;\n  }\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n@media (max-width: 761px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 50%;\n  table-layout: fixed;\n}\n\n@media (max-width: 761px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 38px;\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.block_type[_ngcontent-%COMP%]   .pos[_ngcontent-%COMP%], .wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.block_type[_ngcontent-%COMP%]   .pow[_ngcontent-%COMP%] {\n  padding: 2px 12px;\n  border-radius: 20px;\n  color: #fff;\n  font-size: 14px;\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.block_type[_ngcontent-%COMP%]   .pos[_ngcontent-%COMP%] {\n  background-color: #0c69fe;\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.block_type[_ngcontent-%COMP%]   .pow[_ngcontent-%COMP%] {\n  background-color: rgba(71, 239, 251, 0.7);\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n+1) {\n  background-color: #263163;\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: rgba(35, 78, 226, 0.1);\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n@media (max-width: 761px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.tr_empty[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 575px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.cumulative_diff_presize[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.cumulative_diff_adjusted[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.effective_txs_median[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.current_txs_median[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.total_transactions_size[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    white-space: normal;\n    line-height: 1.4;\n  }\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.tr_seed[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.tr_seed[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  white-space: normal;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-all;\n  line-break: strict;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.transactions_fee[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table.left_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  width: 50%;\n}\n\n@media (max-width: 761px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.left_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    width: 40%;\n  }\n}\n\n@media (max-width: 575px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.left_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    width: 50%;\n  }\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table.left_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 80px;\n  width: 65%;\n}\n\n@media (max-width: 991px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.left_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    padding-right: 20px;\n  }\n}\n\n@media (max-width: 761px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.left_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    width: 60%;\n  }\n}\n\n@media (max-width: 575px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.left_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    width: 50%;\n  }\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 80px;\n  width: 50%;\n}\n\n@media (max-width: 991px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding-left: 60px;\n    width: 60%;\n  }\n}\n\n@media (max-width: 575px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    width: 50%;\n  }\n}\n\n@media (max-width: 761px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding-left: 20px;\n    width: 40%;\n  }\n}\n\n@media (max-width: 575px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    width: 50%;\n  }\n}\n\n.wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  width: 45%;\n}\n\n@media (max-width: 991px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    width: 25%;\n  }\n}\n\n@media (max-width: 761px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    width: 60%;\n  }\n}\n\n@media (max-width: 575px) {\n  .wrapper_table_block_details[_ngcontent-%COMP%]   table.right_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    width: 50%;\n  }\n}\n\n.block_transactions_list[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 45px;\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  color: #fff;\n  font-weight: 300;\n}\n\n.block_transactions_list[_ngcontent-%COMP%]   .table_block_transaction[_ngcontent-%COMP%] {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  overflow: hidden;\n}\n\n.block_transactions_list[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #1b3a8a, #32439f);\n}\n\n@media (max-width: 575px) {\n  .block_transactions_list[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n\n.block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: rgba(35, 78, 226, 0.1);\n}\n\n@media (max-width: 575px) {\n  .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n\n@media (max-width: 991px) {\n  .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: block;\n    width: 280px;\n  }\n}\n\n@media (max-width: 991px) and (max-width: 761px) {\n  .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    width: 190px;\n  }\n}\n\n@media (max-width: 991px) and (max-width: 575px) {\n  .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n}\n\n@media (max-width: 991px) and (max-width: 399px) {\n  .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    width: 85px;\n  }\n}\n\n@media (max-width: 991px) {\n  .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n}\n\n@media (max-width: 991px) {\n  .block_transactions_list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    white-space: normal;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    word-break: break-all;\n    line-break: strict;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Fzc2V0cy9zdHlsZXMvbW9kdWxlcy9fYmxvY2stZGV0YWlscy5zY3NzIiwiYmxvY2stZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIi4uLy4uL2Fzc2V0cy9zdHlsZXMvYmFzZS9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQ0VKOztBQzhESTtFRm5FSjtJQUtRLGVBQUE7RUNJTjtBQUNGOztBREhJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0tSOztBREhJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDS1I7O0FESFk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ0toQjs7QURIWTtFQUNJLGlCQUFBO0FDS2hCOztBREhZO0VBQ0ksZ0JBQUE7QUNLaEI7O0FEREk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO0FDRVI7O0FDOEJJO0VGcENBO0lBTVEsaUJBQUE7RUNJVjtBQUNGOztBQ3FDSTtFRmhEQTtJRTdCQSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7SUFFQSxhQUFBO0lGZ0NRLGdCQUFBO0VDYVY7QUFDRjs7QURWQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ2FKOztBQ2FJO0VGNUJKO0lBSVEsc0JBQUE7RUNlTjtBQUNGOztBRGRJO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FDZ0JSOztBQ0lJO0VGdEJBO0lBSVEsV0FBQTtFQ2tCVjtBQUNGOztBRGpCUTtFQUNJLFlBQUE7QUNtQlo7O0FEakJnQjs7RUFFSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNtQnBCOztBRGpCZ0I7RUFDSSx5QkFBQTtBQ21CcEI7O0FEakJnQjtFQUNJLHlDQUFBO0FDbUJwQjs7QURoQlk7RUFDSSx5QkFBQTtBQ2tCaEI7O0FEaEJZO0VBQ0ksd0NBQUE7QUNrQmhCOztBRGhCWTtFQUNJLG1CQUFBO0FDa0JoQjs7QUMxQkk7RUZVUTtJQUVRLGFBQUE7RUNrQmxCO0FBQ0Y7O0FDekJJO0VGY1k7SUFFUSxtQkFBQTtJQUNBLGdCQUFBO0VDYXRCO0FBQ0Y7O0FEVlk7RUFDSSxZQUFBO0FDWWhCOztBRFhnQjtFRXBHWixtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0FEa0hKOztBRGpCWTtFQUNJLFlBQUE7QUNtQmhCOztBRGJnQjtFQUNJLFVBQUE7QUNlcEI7O0FDeERJO0VGd0NZO0lBR1EsVUFBQTtFQ2lCdEI7QUFDRjs7QUN2REk7RUZrQ1k7SUFNUSxVQUFBO0VDbUJ0QjtBQUNGOztBRGpCZ0I7RUFDSSxtQkFBQTtFQUNBLFVBQUE7QUNtQnBCOztBQzVFSTtFRnVEWTtJQUlRLG1CQUFBO0VDcUJ0QjtBQUNGOztBQzNFSTtFRmlEWTtJQU9RLFVBQUE7RUN1QnRCO0FBQ0Y7O0FDMUVJO0VGMkNZO0lBVVEsVUFBQTtFQ3lCdEI7QUFDRjs7QURuQmdCO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDcUJwQjs7QUMvRkk7RUZ3RVk7SUFJUSxrQkFBQTtJQUNBLFVBQUE7RUN1QnRCO0FBQ0Y7O0FDekZJO0VGNERZO0lBUVEsVUFBQTtFQ3lCdEI7QUFDRjs7QUNwR0k7RUZrRVk7SUFXUSxrQkFBQTtJQUNBLFVBQUE7RUMyQnRCO0FBQ0Y7O0FDcEdJO0VGNERZO0lBZVEsVUFBQTtFQzZCdEI7QUFDRjs7QUQzQmdCO0VBQ0ksVUFBQTtBQzZCcEI7O0FDeEhJO0VGMEZZO0lBR1EsVUFBQTtFQytCdEI7QUFDRjs7QUN2SEk7RUZvRlk7SUFNUSxVQUFBO0VDaUN0QjtBQUNGOztBQ3RISTtFRjhFWTtJQVNRLFVBQUE7RUNtQ3RCO0FBQ0Y7O0FEM0JJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUM4QlI7O0FENUJJO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDOEJSOztBRDVCSTtFQUVJLHVEQUFBO0FDNkJSOztBQzVJSTtFRmdISTtJQUVRLGFBQUE7RUM4QmQ7QUFDRjs7QUR6Qlk7RUFDSSx3Q0FBQTtBQzJCaEI7O0FDcEpJO0VGMkhRO0lBRVEsYUFBQTtFQzJCbEI7QUFDRjs7QUNyS0k7RUY4SWdCOztJQUVJLGNBQUE7SUFDQSxZQUFBO0VDMEJ0QjtBQUNGOztBQ3RLSTtFRndJZ0I7O0lBS1EsWUFBQTtFQzhCMUI7QUFDRjs7QUN0S0k7RUZrSWdCOztJQVFRLFlBQUE7RUNpQzFCO0FBQ0Y7O0FDdktJO0VGNkhnQjs7SUFXUSxXQUFBO0VDb0MxQjtBQUNGOztBQzlMSTtFRjRKZ0I7SUVsT2hCLGdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFRHdRRjtBQUNGOztBQ3JNSTtFRitKZ0I7SUVoT2hCLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtJQUVBLGFBQUE7RUQwUUY7QUFDRiIsImZpbGUiOiJibG9jay1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrX2RldGFpbHMge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbn1cbi5oZWFkaW5nX2Jsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBAaW5jbHVkZSBtYXg5OTEge1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIC5jdXJyZW5jeV9uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLmhlaWdodF9ibG9jayB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG1hcmdpbjogMCAyNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICA+IGEge1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiAjZmZmZjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYucHJldl9ibG9jayB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLm5leHRfYmxvY2sge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmhhc2hfYmxvY2sge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjOWVhYWNjO1xuICAgICAgICAvL2ZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIEBpbmNsdWRlIG1heDk5MSB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBtYXg1NzUge1xuICAgICAgICAgICAgQGluY2x1ZGUgdGV4dFdyYXA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICB9XG4gICAgfVxufVxuLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgQGluY2x1ZGUgbWF4NzYxIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgdGFibGUge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgICAgICBAaW5jbHVkZSBtYXg3NjEge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgdHIge1xuICAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgICAgJi5ibG9ja190eXBlIHtcbiAgICAgICAgICAgICAgICAucG9zLFxuICAgICAgICAgICAgICAgIC5wb3cge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggMTJweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBvcyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzBjNjlmZSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wb3cge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCM0N2VmZmIsIDAuNyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4gKyAxKSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMjYzMTYzLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDJuKSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMjM0ZWUyLCAwLjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLnRyX2VtcHR5IHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXg3NjEge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuY3VtdWxhdGl2ZV9kaWZmX3ByZXNpemUsXG4gICAgICAgICAgICAmLmN1bXVsYXRpdmVfZGlmZl9hZGp1c3RlZCxcbiAgICAgICAgICAgICYuZWZmZWN0aXZlX3R4c19tZWRpYW4sXG4gICAgICAgICAgICAmLmN1cnJlbnRfdHhzX21lZGlhbixcbiAgICAgICAgICAgICYudG90YWxfdHJhbnNhY3Rpb25zX3NpemUge1xuICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4NTc1IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi50cl9zZWVkIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRleHRXcmFwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYudHJhbnNhY3Rpb25zX2ZlZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5sZWZ0X3RhYmxlIHtcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4NzYxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4NTc1IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4OTkxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4NzYxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4NTc1IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5yaWdodF90YWJsZSB7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4OTkxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4NTc1IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4NzYxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4NTc1IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4OTkxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4NzYxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4NTc1IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ibG9ja190cmFuc2FjdGlvbnNfbGlzdCB7XG4gICAgLnRpdGxlIHtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cbiAgICAudGFibGVfYmxvY2tfdHJhbnNhY3Rpb24ge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgdGhlYWQge1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgLjIpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxYjNhOGEsICMzMjQzOWYpO1xuICAgICAgICB0aCB7XG4gICAgICAgICAgICBAaW5jbHVkZSBtYXg1NzUge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGJvZHkge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgICAmOm50aC1jaGlsZCgybikge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzIzNGVlMiwgMC4xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXg1NzUge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oYXNoIHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXg5OTEge1xuICAgICAgICAgICAgICAgICAgICA+IGEsXG4gICAgICAgICAgICAgICAgICAgID4gc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4NTc1IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID4gYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0ZXh0LXRydW5jYXRlOyAvLyBibG9jay1kZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPiBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRleHRXcmFwOyAvLyBhbHQtYmxvY2stZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZlZSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudG90YWxfYW1vdW50IHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaXplIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5ibG9ja19kZXRhaWxzIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLmhlYWRpbmdfYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5oZWFkaW5nX2Jsb2NrIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cbi5oZWFkaW5nX2Jsb2NrIC5jdXJyZW5jeV9uYW1lIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkaW5nX2Jsb2NrIC5oZWlnaHRfYmxvY2sge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDAgMjVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5oZWFkaW5nX2Jsb2NrIC5oZWlnaHRfYmxvY2sgPiBhIHN2ZyB7XG4gIGZpbGw6ICNmZmZmO1xuICB3aWR0aDogMThweDtcbn1cbi5oZWFkaW5nX2Jsb2NrIC5oZWlnaHRfYmxvY2sgPiBhLnByZXZfYmxvY2sge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5oZWFkaW5nX2Jsb2NrIC5oZWlnaHRfYmxvY2sgPiBhLm5leHRfYmxvY2sge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmhlYWRpbmdfYmxvY2sgLmhhc2hfYmxvY2sge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOWVhYWNjO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5oZWFkaW5nX2Jsb2NrIC5oYXNoX2Jsb2NrIHtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5oZWFkaW5nX2Jsb2NrIC5oYXNoX2Jsb2NrIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBsaW5lLWJyZWFrOiBzdHJpY3Q7XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgfVxufVxuXG4ud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MXB4KSB7XG4gIC53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUge1xuICB3aWR0aDogNTAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MXB4KSB7XG4gIC53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlIHRyIHtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZSB0ci5ibG9ja190eXBlIC5wb3MsXG4ud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlIHRyLmJsb2NrX3R5cGUgLnBvdyB7XG4gIHBhZGRpbmc6IDJweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZSB0ci5ibG9ja190eXBlIC5wb3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM2OWZlO1xufVxuLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZSB0ci5ibG9ja190eXBlIC5wb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcxLCAyMzksIDI1MSwgMC43KTtcbn1cbi53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUgdHI6bnRoLWNoaWxkKDJuKzEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MzE2Mztcbn1cbi53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUgdHI6bnRoLWNoaWxkKDJuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzUsIDc4LCAyMjYsIDAuMSk7XG59XG4ud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlIHRyIHRkIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjFweCkge1xuICAud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlIHRyLnRyX2VtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZSB0ci5jdW11bGF0aXZlX2RpZmZfcHJlc2l6ZSB0ZCwgLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZSB0ci5jdW11bGF0aXZlX2RpZmZfYWRqdXN0ZWQgdGQsIC53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUgdHIuZWZmZWN0aXZlX3R4c19tZWRpYW4gdGQsIC53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUgdHIuY3VycmVudF90eHNfbWVkaWFuIHRkLCAud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlIHRyLnRvdGFsX3RyYW5zYWN0aW9uc19zaXplIHRkIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIH1cbn1cbi53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUgdHIudHJfc2VlZCB7XG4gIGhlaWdodDogNTBweDtcbn1cbi53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUgdHIudHJfc2VlZCB0ZDpsYXN0LWNoaWxkIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGxpbmUtYnJlYWs6IHN0cmljdDtcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAtbXMtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cbi53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUgdHIudHJhbnNhY3Rpb25zX2ZlZSB7XG4gIGhlaWdodDogNTBweDtcbn1cbi53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUubGVmdF90YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiA1MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzYxcHgpIHtcbiAgLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZS5sZWZ0X3RhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZS5sZWZ0X3RhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG4ud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlLmxlZnRfdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA2NSU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZS5sZWZ0X3RhYmxlIHRkOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjFweCkge1xuICAud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlLmxlZnRfdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUubGVmdF90YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG4ud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlLnJpZ2h0X3RhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICB3aWR0aDogNTAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUucmlnaHRfdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZS5yaWdodF90YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MXB4KSB7XG4gIC53cmFwcGVyX3RhYmxlX2Jsb2NrX2RldGFpbHMgdGFibGUucmlnaHRfdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB3aWR0aDogNDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZS5yaWdodF90YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuLndyYXBwZXJfdGFibGVfYmxvY2tfZGV0YWlscyB0YWJsZS5yaWdodF90YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IDQ1JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlLnJpZ2h0X3RhYmxlIHRkOmxhc3QtY2hpbGQge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjFweCkge1xuICAud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlLnJpZ2h0X3RhYmxlIHRkOmxhc3QtY2hpbGQge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAud3JhcHBlcl90YWJsZV9ibG9ja19kZXRhaWxzIHRhYmxlLnJpZ2h0X3RhYmxlIHRkOmxhc3QtY2hpbGQge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cblxuLmJsb2NrX3RyYW5zYWN0aW9uc19saXN0IC50aXRsZSB7XG4gIGhlaWdodDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5ibG9ja190cmFuc2FjdGlvbnNfbGlzdCAudGFibGVfYmxvY2tfdHJhbnNhY3Rpb24ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ibG9ja190cmFuc2FjdGlvbnNfbGlzdCB0aGVhZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFiM2E4YSwgIzMyNDM5Zik7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmJsb2NrX3RyYW5zYWN0aW9uc19saXN0IHRoZWFkIHRoIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG59XG4uYmxvY2tfdHJhbnNhY3Rpb25zX2xpc3QgdGJvZHkgdHI6bnRoLWNoaWxkKDJuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzUsIDc4LCAyMjYsIDAuMSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmJsb2NrX3RyYW5zYWN0aW9uc19saXN0IHRib2R5IHRyIHRkIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmJsb2NrX3RyYW5zYWN0aW9uc19saXN0IHRib2R5IHRyIC5oYXNoID4gYSxcbi5ibG9ja190cmFuc2FjdGlvbnNfbGlzdCB0Ym9keSB0ciAuaGFzaCA+IHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyODBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1heC13aWR0aDogNzYxcHgpIHtcbiAgLmJsb2NrX3RyYW5zYWN0aW9uc19saXN0IHRib2R5IHRyIC5oYXNoID4gYSxcbi5ibG9ja190cmFuc2FjdGlvbnNfbGlzdCB0Ym9keSB0ciAuaGFzaCA+IHNwYW4ge1xuICAgIHdpZHRoOiAxOTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmJsb2NrX3RyYW5zYWN0aW9uc19saXN0IHRib2R5IHRyIC5oYXNoID4gYSxcbi5ibG9ja190cmFuc2FjdGlvbnNfbGlzdCB0Ym9keSB0ciAuaGFzaCA+IHNwYW4ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgLmJsb2NrX3RyYW5zYWN0aW9uc19saXN0IHRib2R5IHRyIC5oYXNoID4gYSxcbi5ibG9ja190cmFuc2FjdGlvbnNfbGlzdCB0Ym9keSB0ciAuaGFzaCA+IHNwYW4ge1xuICAgIHdpZHRoOiA4NXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmJsb2NrX3RyYW5zYWN0aW9uc19saXN0IHRib2R5IHRyIC5oYXNoID4gYSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmJsb2NrX3RyYW5zYWN0aW9uc19saXN0IHRib2R5IHRyIC5oYXNoID4gc3BhbiB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgbGluZS1icmVhazogc3RyaWN0O1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG59IiwiQG1peGluIHRleHQtdHJ1bmNhdGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBtaXhpbiB0ZXh0V3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgbGluZS1icmVhazogc3RyaWN0O1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xufVxuQG1peGluIGNvdmVyQm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuQG1peGluIGFicygkdG9wOiBhdXRvLCAkcmlnaHQ6IGF1dG8sICRib3R0b206IGF1dG8sICRsZWZ0OiBhdXRvKSB7XG4gICAgdG9wOiAkdG9wO1xuICAgIHJpZ2h0OiAkcmlnaHQ7XG4gICAgYm90dG9tOiAkYm90dG9tO1xuICAgIGxlZnQ6ICRsZWZ0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbkBtaXhpbiBjb3ZlckltZyB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG5AbWl4aW4gdmFsaW5nQm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuQG1peGluIHVuU2VsZWN0IHtcbiAgICAtd2Via2l0LXRvdWNoLWNvbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5AbWl4aW4gY2xlYXJmaXgge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbn1cbkBtaXhpbiBtYXgxMTk5IHtcbiAgICAvLyBtYWtldCAxMTcxXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbWF4MTE3MCB7XG4gICAgLy8gbWFrZXRzIDk5MlxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTcwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1heDk5MSB7XG4gICAgLy8gbWFrZXRzIDc2MlxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbWF4NzYxIHtcbiAgICAvLyBtYWtldHMgNTc2XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2MXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtYXg1NzUge1xuICAgIC8vIG1ha2V0cyA0MDBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1vYmlsZSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM5OXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiB0cmlhbmdsZVVwKCR3OiAyMHB4LCAkaDogMjBweCwgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyOiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAkaCBzb2xpZCAkY29sb3I7XG59XG5AbWl4aW4gdHJpYW5nbGVEb3duKCR3OiAyMHB4LCAkaDogMjBweCwgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWxlZnQ6ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogJGggc29saWQgJGNvbG9yO1xufVxuQG1peGluIHRyaWFuZ2xlTGVmdCgkdzogMjBweCwgJGg6IDIwcHgsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogJGggc29saWQgJGNvbG9yO1xufVxuQG1peGluIHRyaWFuZ2xlUmlnaHQoJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogJGggc29saWQgJGNvbG9yO1xufVxuQG1peGluIHRyaWFuZ2xlVG9wTGVmdCgkdzogMjBweCwgJGg6IDIwcHgsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6ICR3IHNvbGlkICRjb2xvcjtcbiAgICBib3JkZXItcmlnaHQ6ICRoIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuQG1peGluIHBhcmFsbGVsb2dyYW0oJHc6IDE1MHB4LCAkaDogMTAwcHgsICRza2V3OiAyMGRlZywgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogJHc7XG4gICAgaGVpZ2h0OiAkaDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygkc2tldyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNrZXcoJHNrZXcpO1xuICAgIC1vLXRyYW5zZm9ybTogc2tldygkc2tldyk7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yO1xuICAgID4gc3BhbixcbiAgICBhLFxuICAgIGFkZHJlc3Mge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtJHNrZXcpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2tldygtJHNrZXcpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHNrZXcoLSRza2V3KTtcbiAgICB9XG59XG5AbWl4aW4gYm90dG9tTGluZSgkaDogOHB4LCAkY29sb3I6ICMwMGI5YmYpIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogJGg7XG59XG5AbWl4aW4gY2VudGVyLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5AbWl4aW4gaWNvQ2VudGVyIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5AbWl4aW4gcHNldWRvKCRkaXNwbGF5OiBibG9jaywgJHBvczogYWJzb2x1dGUsICRjb250ZW50OiAnJykge1xuICAgIGNvbnRlbnQ6ICRjb250ZW50O1xuICAgIGRpc3BsYXk6ICRkaXNwbGF5O1xuICAgIHBvc2l0aW9uOiAkcG9zO1xufVxuQG1peGluIGJhcnRibG9jayB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMyMzRlZTIsIDAuMSk7XG59XG4iXX0= */"] });


/***/ }),

/***/ 8718:
/*!****************************************************!*\
  !*** ./src/app/blockchain/blockchain.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockchainComponent": () => (/* binding */ BlockchainComponent)
/* harmony export */ });
/* harmony import */ var app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/subscription-tracker/subscription-tracker */ 8083);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ 5876);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ 3694);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.component */ 6392);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pipes.pipe */ 2701);










const _c0 = function (a0) { return { hide_heading: a0 }; };
const _c1 = function (a0, a1) { return { "text-success": a0, "text-danger": a1 }; };
function BlockchainComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Blockchain ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 27)(5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Daemon state: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 30)(10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Default network fee: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "bitNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Minimum network fee: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "bitNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "app-search", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("isVisible", function BlockchainComponent_div_0_Template_app_search_isVisible_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.onIsVisible($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, ctx_r0.searchIsOpen === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](15, _c1, (ctx_r0.info == null ? null : ctx_r0.info.daemon_network_state) == 2, (ctx_r0.info == null ? null : ctx_r0.info.daemon_network_state) != 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.daemon_network_state[ctx_r0.info == null ? null : ctx_r0.info.daemon_network_state] || "BUSY", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 7, ctx_r0.info.default_fee)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 11, ctx_r0.info.minimum_fee)));
} }
function BlockchainComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BlockchainComponent_table_45_tr_16_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "(PoS)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BlockchainComponent_table_45_tr_16_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "(PoW)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c2 = function (a0, a1, a2, a3) { return { "new-block": a0, pos: a1, pow: a2, select: a3 }; };
const _c3 = function (a1) { return ["/block", a1]; };
function BlockchainComponent_table_45_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 29)(1, "td", 2)(2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BlockchainComponent_table_45_tr_16_span_4_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, BlockchainComponent_table_45_tr_16_span_5_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "amUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "amTimeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "amUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td", 38)(19, "span", 41)(20, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const block_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](20, _c2, block_r11.isNew, block_r11.type == "0", block_r11.type == "1", block_r11.select));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c3, block_r11.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](block_r11.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", block_r11.type == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", block_r11.type == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 14, block_r11.timestamp * 1000), "YYYY.MM.DD HH:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 18, block_r11.actual_timestamp * 1000)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", block_r11.block_cumulative_size, " bytes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](block_r11.tr_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c3, block_r11.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](block_r11.id);
} }
const _c4 = function () { return ["-height"]; };
function BlockchainComponent_table_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr")(3, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Timestamp (UTC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Hash");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, BlockchainComponent_table_45_tr_16_Template, 22, 29, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 1, ctx_r2.BlockDetails, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c4)));
} }
const _c5 = function (a0) { return { "has-error": a0 }; };
function BlockchainComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Pages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockchainComponent_div_46_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "svg", 45)(6, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockchainComponent_div_46_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "svg", 45)(10, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function BlockchainComponent_div_46_Template_input_input_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.currentPage = $event.target.value; })("change", function BlockchainComponent_div_46_Template_input_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.onChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 50)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Items on page:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function BlockchainComponent_div_46_Template_input_input_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.setLimit = $event.target.value; })("change", function BlockchainComponent_div_46_Template_input_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.onChangeLimit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Go to block:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function BlockchainComponent_div_46_Template_input_input_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.setBlock = $event.target.value; })("change", function BlockchainComponent_div_46_Template_input_change_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.searchBlock(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r3.currentPage <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r3.BlockDetails.length < ctx_r3.setLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r3.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r3.setLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c5, ctx_r3.setBlockValid == false));
} }
function BlockchainComponent_table_54_tr_14_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "amUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pools_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, pools_r24.timestamp * 1000), "YYYY.MM.DD HH:mm:ss"));
} }
function BlockchainComponent_table_54_tr_14_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c6 = function (a0, a1) { return { "new-block": a0, "old-block": a1 }; };
const _c7 = function (a1) { return ["/transaction", a1]; };
function BlockchainComponent_table_54_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 29)(1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BlockchainComponent_table_54_tr_14_span_2_Template, 4, 6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, BlockchainComponent_table_54_tr_14_span_3_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "TimeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 38)(13, "span", 41)(14, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const pools_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](12, _c6, pools_r24.isNew, pools_r24.isOld));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", pools_r24.timestamp > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", pools_r24.timestamp === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 8, pools_r24.timestamp * 1000));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", pools_r24.blob_size, " bytes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 10, pools_r24.fee));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c7, pools_r24.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](pools_r24.id);
} }
function BlockchainComponent_table_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 53)(1, "thead")(2, "tr")(3, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Timestamp (UTC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Hash");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, BlockchainComponent_table_54_tr_14_Template, 16, 17, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.TxPoolDetails);
} }
function BlockchainComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r5.info.tx_pool_size, " transactions in pool ");
} }
function BlockchainComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Pool is empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BlockchainComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 50)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Items on page:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function BlockchainComponent_div_57_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r28.setPoolLimit = $event.target.value; })("ngModelChange", function BlockchainComponent_div_57_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.setPoolLimit = $event; })("change", function BlockchainComponent_div_57_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r31.onChangePoolLimit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r7.setPoolLimit)("ngModel", ctx_r7.setPoolLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("of ", ctx_r7.info.tx_pool_size, "");
} }
const _c8 = function (a0, a1) { return { on: a0, off: a1 }; };
class BlockchainComponent extends app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__.SubscriptionTracker {
    constructor(httpService, route, cookieService, ngZone, mobileNavState) {
        super();
        this.httpService = httpService;
        this.route = route;
        this.cookieService = cookieService;
        this.ngZone = ngZone;
        this.mobileNavState = mobileNavState;
        this.lastSendBlockDetail = {
            start: 0,
            limit: 0
        };
        this.searchIsOpen = false;
        this.daemon_network_state = {
            0: 'Offline',
            1: 'Synchronizing',
            2: 'Online',
            3: 'Loading core',
            4: 'System error',
            5: 'Completing work'
        };
        this.maxCountBlock = 1000;
        this.poolsOn = true;
        this.setBlockValid = true;
        this.setLimit = 10;
        this.setPoolLimit = 5;
        this.loader = false;
        this.navIsOpen = false;
    }
    onIsVisible($event) {
        this.searchIsOpen = $event;
    }
    getInfoPrepare(data) {
        const lastHeight = this.info ? this.info.lastBlock : 0;
        const lastTransaction = this.info ? this.info.tx_pool_size : 0;
        this.info = data;
        if (this.info) {
            this.height = this.info.lastBlock;
            this.infoHeight = this.info.height;
            this.posDifficulty = this.info.pos_difficulty;
            this.powDifficulty = this.info.pow_difficulty;
            this.totalCoins = this.info.total_coins;
            this.txCount = this.info.tx_count;
            this.NetworkHashrate = this.info.current_network_hashrate_350;
            if (lastHeight !== this.info.height) {
                this.onChange();
            }
            if (this.info) {
                if (lastTransaction !== this.info.tx_pool_size) {
                    this.refreshPool();
                }
            }
        }
    }
    ngOnInit() {
        this.poolLimit = this.setPoolLimit;
        if (this.cookieService.get('OnOffButtonCookie')) {
            if (this.cookieService.get('OnOffButtonCookie') === 'true') {
                this.poolsOn = true;
            }
            else if (this.cookieService.get('OnOffButtonCookie') === 'false') {
                this.poolsOn = false;
            }
        }
        else {
            this.poolsOn = true;
        }
        if (this.poolsOn === true) {
            this.refreshPool();
        }
        if (this.cookieService.get('setLimitCookie')) {
            this.setLimit = parseInt(this.cookieService.get('setLimitCookie'), 10);
        }
        this.currentPage = 1;
        this.setBlock = null;
        this.getInfoPrepare(this.route.snapshot.data['MainInfo']);
        this._track(this.httpService.subscribeInfo().subscribe((data) => {
            this.getInfoPrepare(data);
        }), this.mobileNavState.change.subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen;
        }));
        this.onChange();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    onChangePoolLimit() {
        this.poolLimit = this.setPoolLimit;
        this.refreshPool();
    }
    toggleBtn() {
        this.poolsOn = !this.poolsOn;
        const exp = new Date();
        exp.setMonth(exp.getMonth() + 3);
        this.cookieService.set('OnOffButtonCookie', String(this.poolsOn), {
            expires: exp
        });
        if (this.poolsOn === true) {
            this.refreshPool();
        }
    }
    refreshPool() {
        this.httpService
            .getTxPoolDetails(this.poolLimit)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe({
            next: (data) => {
                this.TxPoolDetails = data;
                if (this.TxPoolDetails.length) {
                    const self = this;
                    if (this.maxViewedPoolTimestamp) {
                        for (const item of this.TxPoolDetails) {
                            item.isNew =
                                +item.timestamp >
                                    +this.maxViewedPoolTimestamp;
                        }
                        this.ngZone.runOutsideAngular(() => {
                            setTimeout(() => {
                                this.ngZone.run(() => {
                                    for (const item of self.TxPoolDetails) {
                                        item.isNew = false;
                                    }
                                });
                            }, 2000);
                        });
                        if (+this.maxViewedPoolTimestamp <
                            +this.TxPoolDetails[0].timestamp) {
                            this.maxViewedPoolTimestamp =
                                this.TxPoolDetails[0].timestamp;
                        }
                    }
                    else {
                        this.maxViewedPoolTimestamp =
                            this.TxPoolDetails[0].timestamp;
                    }
                }
            },
            error: (err) => console.error(err)
        });
    }
    prevPage() {
        if (this.currentPage - 1 > 0) {
            this.currentPage--;
            this.onChange();
        }
    }
    nextPage() {
        if (this.currentPage !== Math.ceil(this.height / this.limit)) {
            this.currentPage++;
            this.onChange();
        }
        else {
            return false;
        }
    }
    onChangeLimit() {
        if (isNaN(+this.goToBlock) === false &&
            this.goToBlock !== undefined &&
            +this.goToBlock >= 0 &&
            +this.goToBlock < this.height) {
            this.listBlockStart =
                +this.goToBlock -
                    +this.setLimit +
                    1 +
                    ((this.height - 1 - +this.goToBlock) % +this.setLimit);
            this.currentPage =
                Math.floor((this.height - +this.setLimit - (this.listBlockStart + 1)) /
                    +this.setLimit) + 2;
        }
        this.onChange();
    }
    searchBlock() {
        this.goToBlock = this.setBlock;
        if (isNaN(+this.goToBlock) ||
            +this.goToBlock < 0 ||
            +this.goToBlock >= this.height) {
            this.setBlockValid = false;
            this.BlockDetails = [];
            return;
        }
        this.setBlockValid = true;
        this.listBlockStart =
            +this.goToBlock -
                +this.setLimit +
                1 +
                ((this.height - 1 - +this.goToBlock) % +this.setLimit);
        this.currentPage =
            Math.floor((this.height - +this.setLimit - (this.listBlockStart + 1)) /
                +this.setLimit) + 2;
        this.onChange();
    }
    onChange() {
        if (this.setLimit > this.maxCountBlock) {
            this.setLimit = this.maxCountBlock;
        }
        if (!this.setLimit || this.setLimit < 0) {
            this.setLimit = 10;
        }
        this.listBlockStart =
            this.height +
                1 -
                +this.setLimit -
                (this.currentPage - 1) * +this.setLimit;
        this.limit = +this.setLimit;
        this.cookieService.set('setLimitCookie', this.limit);
        if (this.info) {
            this.height = this.info.lastBlock;
            if (this.listBlockStart < 0 || this.listBlockStart === null) {
                this.limit = this.limit + this.listBlockStart;
                if (this.limit < 0) {
                    this.BlockDetails = [];
                    return;
                }
                this.listBlockStart = 0;
            }
            if (this.lastSendBlockDetail.start !== this.listBlockStart ||
                this.lastSendBlockDetail.limit !== this.limit) {
                this.lastSendBlockDetail.start = this.listBlockStart;
                this.lastSendBlockDetail.limit = this.limit;
                this.loader = true;
                this._track(this.httpService
                    .getBlockDetails(this.listBlockStart, this.limit)
                    .subscribe({
                    next: (data) => {
                        this.BlockDetails = data;
                        if (this.BlockDetails.length) {
                            const self = this;
                            if (this.maxViewedBlockHeight) {
                                for (const item of this.BlockDetails) {
                                    item.isNew =
                                        item.height >
                                            this.maxViewedBlockHeight;
                                }
                                this.ngZone.runOutsideAngular(() => {
                                    setTimeout(() => {
                                        this.ngZone.run(() => {
                                            for (const item of self.BlockDetails) {
                                                item.isNew = false;
                                            }
                                        });
                                    }, 2000);
                                });
                                if (this.maxViewedBlockHeight <
                                    this.BlockDetails[this.BlockDetails.length - 1].height) {
                                    this.maxViewedBlockHeight =
                                        this.BlockDetails[this.BlockDetails.length - 1].height;
                                }
                            }
                            else {
                                this.maxViewedBlockHeight =
                                    this.BlockDetails[this.BlockDetails.length - 1].height;
                            }
                            if (this.goToBlock &&
                                this.setBlockValid === true) {
                                for (const row of this.BlockDetails) {
                                    row.select =
                                        row.height === +this.goToBlock;
                                }
                                this.ngZone.runOutsideAngular(() => {
                                    setTimeout(() => {
                                        this.ngZone.run(() => {
                                            for (const row of self.BlockDetails) {
                                                row.select = false;
                                            }
                                        });
                                    }, 2000);
                                });
                            }
                        }
                    },
                    error: (err) => (this.BlockDetails = []),
                    complete: () => (this.loader = false)
                }));
            }
        }
    }
}
BlockchainComponent.ɵfac = function BlockchainComponent_Factory(t) { return new (t || BlockchainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.MobileNavState)); };
BlockchainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BlockchainComponent, selectors: [["app-blockchain"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 58, vars: 34, consts: [["class", "top_box", 4, "ngIf"], [1, "main_info"], [1, "height"], [1, "title"], [1, "value"], [1, "difficulty"], [1, "pos"], [1, "pow"], [1, "coins_emitted"], [1, "transactions"], [1, "hash_rate"], [1, "latest_blocks"], [1, "table_title"], ["class", "wrap_loader", 4, "ngIf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "transaction_pool"], [1, "heading_table"], [1, "left_block"], ["type", "button", 3, "ngClass", "click"], ["class", "full_table", 4, "ngIf"], ["class", "short_info_pool", 4, "ngIf"], ["class", "pool_is_empty", 4, "ngIf"], ["class", "pagination trans_pool", 4, "ngIf"], [1, "top_box"], [1, "left_box"], [1, "mobile_heading", 3, "ngClass"], [1, "blockchain_info"], [1, "daemon_state"], [3, "ngClass"], [1, "network_info"], [3, "isVisible"], [1, "wrap_loader"], [1, "loader"], [1, "timestamp"], [1, "age"], [1, "size"], [1, "transaction"], [1, "hash"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "cont_hash"], [1, "pagination"], [1, "left_position"], ["type", "button", 1, "prev_btn", 3, "disabled", "click"], ["x", "0px", "y", "0px", "viewBox", "0 0 477.175 477.175"], ["d", "M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\n              c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"], ["type", "button", 1, "next_btn", 3, "disabled", "click"], ["d", "M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5\n              c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z\n              "], ["type", "text", 3, "value", "input", "change"], [1, "right_position"], [1, "title_go_to_block"], ["type", "text", "placeholder", "number", 1, "input_go_to_block", 3, "ngClass", "input", "change"], [1, "full_table"], [1, "fee"], [1, "short_info_pool"], [1, "pool_is_empty"], [1, "pagination", "trans_pool"], ["type", "text", 3, "value", "ngModel", "input", "ngModelChange", "change"], [1, "of"]], template: function BlockchainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BlockchainComponent_div_0_Template, 23, 18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Difficulty");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 4)(12, "div", 6)(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "PoS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 7)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "PoW:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 8)(23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Coins Emitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "moneyParse");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 9)(30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 10)(36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Hash Rate (aprox):");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](40, "hashPowerConverter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 11)(42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Latest Blocks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, BlockchainComponent_div_44_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, BlockchainComponent_table_45_Template, 18, 5, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, BlockchainComponent_div_46_Template, 20, 7, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 16)(48, "div", 17)(49, "div", 18)(50, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Transaction Pool");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockchainComponent_Template_button_click_52_listener() { return ctx.toggleBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, BlockchainComponent_table_54_Template, 15, 1, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, BlockchainComponent_div_55_Template, 2, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, BlockchainComponent_div_56_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, BlockchainComponent_div_57_Template, 8, 3, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.navIsOpen === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 16, ctx.infoHeight));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 18, ctx.posDifficulty));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 20, ctx.powDifficulty));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 22, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 24, ctx.totalCoins)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 26, ctx.txCount + ctx.infoHeight));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](40, 28, ctx.NetworkHashrate, "speed"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loader === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.BlockDetails && ctx.BlockDetails.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.BlockDetails && ctx.BlockDetails.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](31, _c8, ctx.poolsOn === false, ctx.poolsOn === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.poolsOn == true ? "turn off" : "turn on", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.poolsOn === true && ctx.info.tx_pool_size > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.poolsOn === false && ctx.info && (ctx.info == null ? null : ctx.info.tx_pool_size) && (ctx.info == null ? null : ctx.info.tx_pool_size) !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx.info == null ? null : ctx.info.tx_pool_size) || (ctx.info == null ? null : ctx.info.tx_pool_size) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.poolsOn === true && ctx.info.tx_pool_size >= 5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel], pipes: [app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__.BitNumberPipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__.MoneyParsePipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__.HashPowerConverterPipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__.OrderPipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__.DateFormatPipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__.UtcPipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__.TimeAgoPipe2, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_3__.TimeAgoPipe], styles: [".blockchain_info[_ngcontent-%COMP%] {\n  display: flex;\n  color: #9eaacc;\n  font-size: 14px;\n  white-space: nowrap;\n}\n.blockchain_info[_ngcontent-%COMP%]   .daemon_state[_ngcontent-%COMP%] {\n  margin-right: 25px;\n}\n@media (max-width: 575px) {\n  .blockchain_info[_ngcontent-%COMP%]   .daemon_state[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.blockchain_info[_ngcontent-%COMP%]   .network_info[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media (max-width: 991px) {\n  .blockchain_info[_ngcontent-%COMP%]   .network_info[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.blockchain_info[_ngcontent-%COMP%]   .network_info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-right: 25px;\n}\n.latest_blocks[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: rgba(35, 78, 226, 0.1);\n  border-radius: 10px;\n  margin-bottom: 25px;\n  position: relative;\n  min-height: 300px;\n}\n@media (max-width: 761px) {\n  .latest_blocks[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n}\n.latest_blocks[_ngcontent-%COMP%]   .table_title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 300;\n  color: #fff;\n  padding: 18px 20px;\n}\n@media (max-width: 399px) {\n  .latest_blocks[_ngcontent-%COMP%]   .table_title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.latest_blocks[_ngcontent-%COMP%]   .wrap_loader[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  height: 200px;\n  z-index: 999;\n}\n.latest_blocks[_ngcontent-%COMP%]   .wrap_loader[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  color: #68a1ff;\n}\n.latest_blocks[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #9eaacc;\n}\n.latest_blocks[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #68a1ff;\n}\n@media (max-width: 761px) {\n  .latest_blocks[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    min-width: 850px;\n  }\n}\n@media (max-width: 1170px) {\n  .latest_blocks[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    table-layout: auto;\n    width: 100%;\n    white-space: nowrap;\n  }\n  .latest_blocks[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%] {\n    width: 100%;\n    white-space: nowrap;\n  }\n  .latest_blocks[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]   .cont_hash[_ngcontent-%COMP%] {\n    position: relative;\n    max-width: 100%;\n    padding: 0 !important;\n    display: -moz-flex;\n    display: flex;\n    vertical-align: text-bottom !important;\n  }\n  .latest_blocks[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]   .cont_hash[_ngcontent-%COMP%]:after {\n    content: \"-\";\n    display: inline;\n    visibility: hidden;\n    width: 0;\n  }\n  .latest_blocks[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]   .cont_hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    position: absolute;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -ms-text-overflow: ellipsis;\n    -o-text-overflow: ellipsis;\n    max-width: 100%;\n    min-width: 0;\n    width: 100%;\n    top: 0;\n    left: 0;\n  }\n  .latest_blocks[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]   .cont_hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n    content: \"-\";\n    display: inline;\n    visibility: hidden;\n    width: 0;\n  }\n}\n@media (max-width: 761px) {\n  .latest_blocks[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n    min-width: 850px;\n  }\n}\n.transaction_pool[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: rgba(35, 78, 226, 0.1);\n  border-radius: 10px;\n}\n@media (max-width: 991px) {\n  .transaction_pool[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n}\n.transaction_pool[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #9eaacc;\n}\n.transaction_pool[_ngcontent-%COMP%]   .heading_table[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 20px;\n}\n.transaction_pool[_ngcontent-%COMP%]   .heading_table[_ngcontent-%COMP%]   .left_block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.transaction_pool[_ngcontent-%COMP%]   .heading_table[_ngcontent-%COMP%]   .left_block[_ngcontent-%COMP%]    > .table_title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 300;\n  color: #fff;\n  margin-right: 15px;\n}\n@media (max-width: 399px) {\n  .transaction_pool[_ngcontent-%COMP%]   .heading_table[_ngcontent-%COMP%]   .left_block[_ngcontent-%COMP%]    > .table_title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.transaction_pool[_ngcontent-%COMP%]   .heading_table[_ngcontent-%COMP%]   .left_block[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  text-transform: uppercase;\n  border-radius: 10px;\n  background: linear-gradient(to bottom, #212f6c, #212f6c);\n  padding: 5px 30px;\n  transition: 0.2s;\n  border: none;\n}\n@media (max-width: 399px) {\n  .transaction_pool[_ngcontent-%COMP%]   .heading_table[_ngcontent-%COMP%]   .left_block[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px 15px;\n    white-space: nowrap;\n  }\n}\n.transaction_pool[_ngcontent-%COMP%]   .heading_table[_ngcontent-%COMP%]   .left_block[_ngcontent-%COMP%]    > button.off[_ngcontent-%COMP%] {\n  color: #ff5252;\n}\n.transaction_pool[_ngcontent-%COMP%]   .heading_table[_ngcontent-%COMP%]   .left_block[_ngcontent-%COMP%]    > button.on[_ngcontent-%COMP%] {\n  color: #00c853;\n}\n.transaction_pool[_ngcontent-%COMP%]   .heading_table[_ngcontent-%COMP%]   .left_block[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to bottom, #212f6c, #26367a);\n}\n.transaction_pool[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.transaction_pool[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.transaction_pool[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #68a1ff;\n}\n@media (max-width: 761px) {\n  .transaction_pool[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    min-width: 850px;\n  }\n}\n@media (max-width: 1170px) {\n  .transaction_pool[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    table-layout: auto;\n    width: 100%;\n    white-space: nowrap;\n  }\n  .transaction_pool[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%] {\n    width: 100%;\n    white-space: nowrap;\n  }\n  .transaction_pool[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]   .cont_hash[_ngcontent-%COMP%] {\n    position: relative;\n    max-width: 100%;\n    padding: 0 !important;\n    display: -moz-flex;\n    display: flex;\n    vertical-align: text-bottom !important;\n  }\n  .transaction_pool[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]   .cont_hash[_ngcontent-%COMP%]:after {\n    content: \"-\";\n    display: inline;\n    visibility: hidden;\n    width: 0;\n  }\n  .transaction_pool[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]   .cont_hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    position: absolute;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -ms-text-overflow: ellipsis;\n    -o-text-overflow: ellipsis;\n    max-width: 100%;\n    min-width: 0;\n    width: 100%;\n    top: 0;\n    left: 0;\n  }\n  .transaction_pool[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%]   .cont_hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n    content: \"-\";\n    display: inline;\n    visibility: hidden;\n    width: 0;\n  }\n}\n.transaction_pool[_ngcontent-%COMP%]   .pool_is_empty[_ngcontent-%COMP%], .transaction_pool[_ngcontent-%COMP%]   .short_info_pool[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 125px;\n  font-size: 20px;\n  font-weight: 300;\n  color: #9eaacc;\n  padding-bottom: 25px;\n}\n@media (max-width: 761px) {\n  .transaction_pool[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n    min-width: 850px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2NrY2hhaW4uY29tcG9uZW50LnNjc3MiLCIuLi8uLi9hc3NldHMvc3R5bGVzL2Jhc2UvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUNJO0VBQ0ksa0JBQUE7QUFDUjtBQzJFSTtFRDdFQTtJQUdRLGFBQUE7RUFHVjtBQUNGO0FBREk7RUFDSSxhQUFBO0FBR1I7QUN1REk7RUQzREE7SUFHUSxhQUFBO0VBS1Y7QUFDRjtBQUpRO0VBQ0ksa0JBQUE7QUFNWjtBQURBO0VDNklJLG1CQUFBO0VBQ0Esd0NBQUE7RUQ1SUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFLSjtBQzRDSTtFRHRESjtJQU9RLGdCQUFBO0VBT047QUFDRjtBQU5JO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBUVI7QUM0Q0k7RUR4REE7SUFNUSxlQUFBO0VBVVY7QUFDRjtBQVJJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFVUjtBQVRRO0VBQ0ksY0FBQTtBQVdaO0FBUFE7RUFDSSxjQUFBO0FBU1o7QUFQUTtFQUNJLGNBQUE7QUFTWjtBQ2FJO0VEM0JBO0lBUVEsZ0JBQUE7RUFVVjtBQUNGO0FDSkk7RURmQTtJQVdRLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VBWVY7RUFYVTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtFQWFkO0VBWmM7SUFDSSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtJQUVBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLHNDQUFBO0VBY2xCO0VBYmtCO0lBQ0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7RUFldEI7RUFia0I7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtJQUNBLDJCQUFBO0lBQ0EsMEJBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtFQWV0QjtFQWJzQjtJQUNJLFlBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0VBZTFCO0FBQ0Y7QUNyQ0k7RUQ0QkE7SUFFUSxnQkFBQTtFQVdWO0FBQ0Y7QUFQQTtFQ29ESSxtQkFBQTtFQUNBLHdDQUFBO0VEbkRBLG1CQUFBO0FBV0o7QUN0REk7RUR5Q0o7SUFJUSxnQkFBQTtFQWFOO0FBQ0Y7QUFaSTtFQUNJLGNBQUE7QUFjUjtBQVpJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFjUjtBQWJRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBZVo7QUFkWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWdCaEI7QUM1REk7RUR3Q1E7SUFNUSxlQUFBO0VBa0JsQjtBQUNGO0FBaEJZO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdEQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFrQmhCO0FDN0VJO0VEaURRO0lBWVEsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUFvQmxCO0FBQ0Y7QUFuQmdCO0VBQ0ksY0FBQTtBQXFCcEI7QUFuQmdCO0VBQ0ksY0FBQTtBQXFCcEI7QUFuQmdCO0VBQ0ksd0RBQUE7QUFxQnBCO0FBYlE7RUFDSSwwQ0FBQTtBQWVaO0FBWGdCO0VBQ0ksbUJBQUE7QUFhcEI7QUFOUTtFQUNJLGNBQUE7QUFRWjtBQ2pISTtFRHlGQTtJQW1CUSxnQkFBQTtFQVNWO0FBQ0Y7QUNsSUk7RURxR0E7SUFzQlEsa0JBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUFXVjtFQVZVO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0VBWWQ7RUFYYztJQUNJLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0lBRUEsa0JBQUE7SUFDQSxhQUFBO0lBQ0Esc0NBQUE7RUFhbEI7RUFaa0I7SUFDSSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtFQWN0QjtFQVprQjtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0lBQ0EsMkJBQUE7SUFDQSwwQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0VBY3RCO0VBWnNCO0lBQ0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7RUFjMUI7QUFDRjtBQVJJOztFQUVJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQVVSO0FDOUtJO0VEc0tBO0lBRVEsZ0JBQUE7RUFVVjtBQUNGIiwiZmlsZSI6ImJsb2NrY2hhaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzL2Jhc2UvbWl4aW5zJztcbi5ibG9ja2NoYWluX2luZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICM5ZWFhY2M7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgLmRhZW1vbl9zdGF0ZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICAgICAgQGluY2x1ZGUgbWF4NTc1IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm5ldHdvcmtfaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIEBpbmNsdWRlIG1heDk5MSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgID4gZGl2IHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxhdGVzdF9ibG9ja3Mge1xuICAgIEBpbmNsdWRlIGJhcnRibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgfVxuICAgIC50YWJsZV90aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDE4cHggMjBweDtcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAud3JhcF9sb2FkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIC5sb2FkZXIge1xuICAgICAgICAgICAgY29sb3I6ICM2OGExZmY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGFibGUge1xuICAgICAgICB0aGVhZCB0ciB0aCB7XG4gICAgICAgICAgICBjb2xvcjogIzllYWFjYztcbiAgICAgICAgfVxuICAgICAgICAuaGFzaCBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjhhMWZmO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDg1MHB4O1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIG1heDExNzAge1xuICAgICAgICAgICAgdGFibGUtbGF5b3V0OiBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgLmhhc2gge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgLmNvbnRfaGFzaCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1vei1mbGV4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b20gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnLSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+IGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnLSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucGFnaW5hdGlvbiB7XG4gICAgICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDg1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udHJhbnNhY3Rpb25fcG9vbCB7XG4gICAgQGluY2x1ZGUgYmFydGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgQGluY2x1ZGUgbWF4OTkxIHtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICB9XG4gICAgdGhlYWQgdHIgdGgge1xuICAgICAgICBjb2xvcjogIzllYWFjYztcbiAgICB9XG4gICAgLmhlYWRpbmdfdGFibGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgLmxlZnRfYmxvY2sge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICA+IC50YWJsZV90aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA+IGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzIxMmY2YywgIzIxMmY2Yyk7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDMwcHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi5vZmYge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNTI1MjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi5vbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBjODUzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzIxMmY2YywgIzI2MzY3YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGFibGUge1xuICAgICAgICAvL2JvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNmZmYsIDAuNSk7XG4gICAgICAgIH1cbiAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDJuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjZmZmLCAuNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5oYXNoIGEge1xuICAgICAgICAgICAgY29sb3I6ICM2OGExZmY7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgbWF4NzYxIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogODUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgbWF4MTE3MCB7XG4gICAgICAgICAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAuaGFzaCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAuY29udF9oYXNoIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICctJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID4gYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICctJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5wb29sX2lzX2VtcHR5LFxuICAgIC5zaG9ydF9pbmZvX3Bvb2wge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBjb2xvcjogIzllYWFjYztcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgfVxuICAgIC5wYWdpbmF0aW9uIHtcbiAgICAgICAgQGluY2x1ZGUgbWF4NzYxIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogODUwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAbWl4aW4gdGV4dC10cnVuY2F0ZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1peGluIHRleHRXcmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBsaW5lLWJyZWFrOiBzdHJpY3Q7XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG59XG5AbWl4aW4gY292ZXJCb3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5AbWl4aW4gYWJzKCR0b3A6IGF1dG8sICRyaWdodDogYXV0bywgJGJvdHRvbTogYXV0bywgJGxlZnQ6IGF1dG8pIHtcbiAgICB0b3A6ICR0b3A7XG4gICAgcmlnaHQ6ICRyaWdodDtcbiAgICBib3R0b206ICRib3R0b207XG4gICAgbGVmdDogJGxlZnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuQG1peGluIGNvdmVySW1nIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cbkBtaXhpbiB2YWxpbmdCb3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5AbWl4aW4gdW5TZWxlY3Qge1xuICAgIC13ZWJraXQtdG91Y2gtY29sbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbkBtaXhpbiBjbGVhcmZpeCB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuQG1peGluIG1heDExOTkge1xuICAgIC8vIG1ha2V0IDExNzFcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtYXgxMTcwIHtcbiAgICAvLyBtYWtldHMgOTkyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNzBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbWF4OTkxIHtcbiAgICAvLyBtYWtldHMgNzYyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtYXg3NjEge1xuICAgIC8vIG1ha2V0cyA1NzZcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzYxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1heDU3NSB7XG4gICAgLy8gbWFrZXRzIDQwMFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbW9iaWxlIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIHRyaWFuZ2xlVXAoJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXI6ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206ICRoIHNvbGlkICRjb2xvcjtcbn1cbkBtaXhpbiB0cmlhbmdsZURvd24oJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wOiAkaCBzb2xpZCAkY29sb3I7XG59XG5AbWl4aW4gdHJpYW5nbGVMZWZ0KCR3OiAyMHB4LCAkaDogMjBweCwgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAkaCBzb2xpZCAkY29sb3I7XG59XG5AbWl4aW4gdHJpYW5nbGVSaWdodCgkdzogMjBweCwgJGg6IDIwcHgsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAkaCBzb2xpZCAkY29sb3I7XG59XG5AbWl4aW4gdHJpYW5nbGVUb3BMZWZ0KCR3OiAyMHB4LCAkaDogMjBweCwgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogJHcgc29saWQgJGNvbG9yO1xuICAgIGJvcmRlci1yaWdodDogJGggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5AbWl4aW4gcGFyYWxsZWxvZ3JhbSgkdzogMTUwcHgsICRoOiAxMDBweCwgJHNrZXc6IDIwZGVnLCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAkdztcbiAgICBoZWlnaHQ6ICRoO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KCRza2V3KTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2tldygkc2tldyk7XG4gICAgLW8tdHJhbnNmb3JtOiBza2V3KCRza2V3KTtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4gICAgPiBzcGFuLFxuICAgIGEsXG4gICAgYWRkcmVzcyB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0kc2tldyk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBza2V3KC0kc2tldyk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogc2tldygtJHNrZXcpO1xuICAgIH1cbn1cbkBtaXhpbiBib3R0b21MaW5lKCRoOiA4cHgsICRjb2xvcjogIzAwYjliZikge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAkaDtcbn1cbkBtaXhpbiBjZW50ZXItYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbkBtaXhpbiBpY29DZW50ZXIge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbkBtaXhpbiBwc2V1ZG8oJGRpc3BsYXk6IGJsb2NrLCAkcG9zOiBhYnNvbHV0ZSwgJGNvbnRlbnQ6ICcnKSB7XG4gICAgY29udGVudDogJGNvbnRlbnQ7XG4gICAgZGlzcGxheTogJGRpc3BsYXk7XG4gICAgcG9zaXRpb246ICRwb3M7XG59XG5AbWl4aW4gYmFydGJsb2NrIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzIzNGVlMiwgMC4xKTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 9533:
/*!*******************************************************************!*\
  !*** ./src/app/charts/avg-block-size/avg-block-size.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvgBlockSizeComponent": () => (/* binding */ AvgBlockSizeComponent)
/* harmony export */ });
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-highcharts */ 4072);
/* harmony import */ var app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/subscription-tracker/subscription-tracker */ 8083);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http.service */ 5876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../search/search.component */ 6392);









const _c0 = function () { return ["/charts"]; };
const _c1 = function (a0) { return { hide_back_btn: a0 }; };
function AvgBlockSizeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-search", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("isVisible", function AvgBlockSizeComponent_div_0_Template_app_search_isVisible_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.onIsVisible($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, ctx_r0.searchIsOpen === true));
} }
function AvgBlockSizeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AvgBlockSizeComponent extends app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__.SubscriptionTracker {
    constructor(httpService, mobileNavState) {
        super();
        this.httpService = httpService;
        this.mobileNavState = mobileNavState;
        this.navIsOpen = false;
        this.searchIsOpen = false;
        this.activeChart = 'AvgBlockSize';
        this.period = 'all';
    }
    static drawChart(activeChart, titleText, yText, chartsData) {
        return new angular_highcharts__WEBPACK_IMPORTED_MODULE_4__.Chart({
            chart: {
                type: 'line',
                backgroundColor: '#2b3768',
                height: 700,
                width: null,
                zoomType: 'x'
            },
            title: {
                text: titleText,
                style: {
                    color: '#fff',
                    fontSize: '18px'
                }
            },
            credits: { enabled: false },
            exporting: { enabled: false },
            legend: {
                enabled: true,
                itemStyle: {
                    color: '#9eaacc',
                    fontFamily: 'Helvetica'
                },
                itemHoverStyle: {
                    color: '#9eaacc'
                }
            },
            tooltip: {
                enabled: true,
                shared: true,
                valueDecimals: 0,
                xDateFormat: '%Y/%m/%d %H:%M',
                pointFormatter: function () {
                    const point = this;
                    return ('<b style="color:' +
                        point.color +
                        '">\u25CF</b> ' +
                        point.series.name +
                        ': <b>' +
                        point.y +
                        '</b><br/>');
                }
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: []
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 2,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    style: {
                        color: '#9eaacc',
                        fontSize: '11px'
                    },
                    format: '{value:%d.%b}'
                }
            },
            yAxis: {
                floor: 0,
                title: {
                    text: yText,
                    style: {
                        color: '#9eaacc'
                    }
                },
                labels: {
                    style: {
                        color: '#9eaacc',
                        fontSize: '11px'
                    }
                }
            },
            navigator: { enabled: true },
            rangeSelector: {
                // height: 60,
                enabled: true,
                allButtonsEnabled: true,
                buttons: [
                    {
                        type: 'day',
                        count: 1,
                        text: 'day'
                    },
                    {
                        type: 'week',
                        count: 1,
                        text: 'week'
                    },
                    {
                        type: 'month',
                        count: 1,
                        text: 'month'
                    },
                    {
                        type: 'month',
                        count: 3,
                        text: 'quarter'
                    },
                    {
                        type: 'year',
                        count: 1,
                        text: 'year'
                    },
                    {
                        type: 'all',
                        text: 'all'
                    }
                ],
                selected: 1,
                labelStyle: {
                    color: '#9eaacc'
                },
                inputStyle: {
                    color: '#9eaacc',
                    backgroundColor: '#2b3768'
                },
                inputBoxBorderColor: '#9eaacc',
                inputBoxWidth: 120,
                inputBoxHeight: 16,
                buttonTheme: {
                    width: 60,
                    fill: '#32439f',
                    style: {
                        color: '#fff',
                        fontSize: '14px',
                        fontFamily: 'Helvetica',
                        fontWeight: '300',
                        opacity: 1
                    },
                    states: {
                        hover: {
                            fill: '#32439f'
                        },
                        select: {
                            fill: '#32439f',
                            stroke: '#fff',
                            'stroke-width': 1,
                            style: {
                                color: '#fff',
                                opacity: 1,
                                fontWeight: 400
                            }
                        },
                        disabled: {
                            fill: '#32439f',
                            style: {
                                color: '#fff',
                                opacity: 0.5,
                                fontWeight: 400,
                                cursor: 'default'
                            }
                        }
                    }
                }
            },
            series: chartsData,
            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 575
                        },
                        chartOptions: {
                            chart: {
                                width: 575
                            },
                            rangeSelector: {
                                // height: 100,
                                inputPosition: {
                                    align: 'left'
                                }
                            }
                        }
                    }
                ]
            }
        });
    }
    onIsVisible($event) {
        this.searchIsOpen = $event;
    }
    ngOnInit() {
        this.mobileNavState.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen;
        });
        this.initialChart();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    initialChart() {
        this.loader = true;
        this.httpService
            .getChart(this.activeChart, this.period)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe({
            next: (data) => {
                this.InputArray = data;
                const AvgBlockSize = [];
                for (let i = 1; i < this.InputArray.length; i++) {
                    AvgBlockSize.push([
                        this.InputArray[i].at * 1000,
                        this.InputArray[i].bcs
                    ]);
                }
                this.AvgBlockSizeChart = AvgBlockSizeComponent.drawChart(false, 'Average Block Size', 'MB', (this.seriesData = [
                    { type: 'area', name: 'MB', data: AvgBlockSize }
                ]));
            },
            error: (err) => console.log(err),
            complete: () => (this.loader = false)
        });
    }
}
AvgBlockSizeComponent.ɵfac = function AvgBlockSizeComponent_Factory(t) { return new (t || AvgBlockSizeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.MobileNavState)); };
AvgBlockSizeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AvgBlockSizeComponent, selectors: [["app-avg-block-size"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [["class", "top_box", 4, "ngIf"], [1, "wrap_charts"], ["class", "wrap_loader", 4, "ngIf"], [3, "chart"], [1, "top_box"], [1, "left_box"], [1, "back_btn", 3, "routerLink", "ngClass"], [3, "isVisible"], [1, "wrap_loader"], [1, "loader"]], template: function AvgBlockSizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AvgBlockSizeComponent_div_0_Template, 5, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AvgBlockSizeComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.navIsOpen === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loader === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("chart", ctx.AvgBlockSizeChart);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, angular_highcharts__WEBPACK_IMPORTED_MODULE_4__.ChartDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdmctYmxvY2stc2l6ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3077:
/*!*****************************************************************************!*\
  !*** ./src/app/charts/avg-trans-per-block/avg-trans-per-block.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvgTransPerBlockComponent": () => (/* binding */ AvgTransPerBlockComponent)
/* harmony export */ });
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-highcharts */ 4072);
/* harmony import */ var app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/subscription-tracker/subscription-tracker */ 8083);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http.service */ 5876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../search/search.component */ 6392);









const _c0 = function () { return ["/charts"]; };
const _c1 = function (a0) { return { hide_back_btn: a0 }; };
function AvgTransPerBlockComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-search", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("isVisible", function AvgTransPerBlockComponent_div_0_Template_app_search_isVisible_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.onIsVisible($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, ctx_r0.searchIsOpen === true));
} }
function AvgTransPerBlockComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AvgTransPerBlockComponent extends app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__.SubscriptionTracker {
    constructor(httpService, mobileNavState) {
        super();
        this.httpService = httpService;
        this.mobileNavState = mobileNavState;
        this.navIsOpen = false;
        this.searchIsOpen = false;
        this.activeChart = 'AvgTransPerBlock';
        this.period = 'all';
    }
    static drawChart(activeChart, titleText, yText, chartsData) {
        return new angular_highcharts__WEBPACK_IMPORTED_MODULE_4__.Chart({
            chart: {
                type: 'line',
                backgroundColor: '#2b3768',
                height: 700,
                width: null,
                zoomType: 'x'
            },
            title: {
                text: titleText,
                style: {
                    color: '#fff',
                    fontSize: '18px'
                }
            },
            credits: { enabled: false },
            exporting: { enabled: false },
            legend: {
                enabled: true,
                itemStyle: {
                    color: '#9eaacc',
                    fontFamily: 'Helvetica'
                },
                itemHoverStyle: {
                    color: '#9eaacc'
                }
            },
            tooltip: {
                enabled: true,
                shared: true,
                valueDecimals: 0,
                xDateFormat: '%Y/%m/%d %H:%M',
                pointFormatter: function () {
                    const point = this;
                    return ('<b style="color:' +
                        point.color +
                        '">\u25CF</b> ' +
                        point.series.name +
                        ': <b>' +
                        point.y +
                        '</b><br/>');
                }
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: []
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 2,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    style: {
                        color: '#9eaacc',
                        fontSize: '11px'
                    },
                    format: '{value:%d.%b}'
                }
            },
            yAxis: {
                floor: 0,
                title: {
                    text: yText,
                    style: {
                        color: '#9eaacc'
                    }
                },
                labels: {
                    style: {
                        color: '#9eaacc',
                        fontSize: '11px'
                    }
                }
            },
            navigator: { enabled: true },
            rangeSelector: {
                // height: 60,
                enabled: true,
                allButtonsEnabled: true,
                buttons: [
                    {
                        type: 'day',
                        count: 1,
                        text: 'day'
                    },
                    {
                        type: 'week',
                        count: 1,
                        text: 'week'
                    },
                    {
                        type: 'month',
                        count: 1,
                        text: 'month'
                    },
                    {
                        type: 'month',
                        count: 3,
                        text: 'quarter'
                    },
                    {
                        type: 'year',
                        count: 1,
                        text: 'year'
                    },
                    {
                        type: 'all',
                        text: 'all'
                    }
                ],
                selected: 1,
                labelStyle: {
                    color: '#9eaacc'
                },
                inputStyle: {
                    color: '#9eaacc',
                    backgroundColor: '#2b3768'
                },
                inputBoxBorderColor: '#9eaacc',
                inputBoxWidth: 120,
                inputBoxHeight: 16,
                buttonTheme: {
                    width: 60,
                    fill: '#32439f',
                    style: {
                        color: '#fff',
                        fontSize: '14px',
                        fontFamily: 'Helvetica',
                        fontWeight: '300',
                        opacity: 1
                    },
                    states: {
                        hover: {
                            fill: '#32439f'
                        },
                        select: {
                            fill: '#32439f',
                            stroke: '#fff',
                            'stroke-width': 1,
                            style: {
                                color: '#fff',
                                opacity: 1,
                                fontWeight: 400
                            }
                        },
                        disabled: {
                            fill: '#32439f',
                            style: {
                                color: '#fff',
                                opacity: 0.5,
                                fontWeight: 400,
                                cursor: 'default'
                            }
                        }
                    }
                }
            },
            series: chartsData,
            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 575
                        },
                        chartOptions: {
                            chart: {
                                width: 575
                            },
                            rangeSelector: {
                                // height: 100,
                                inputPosition: {
                                    align: 'left'
                                }
                            }
                        }
                    }
                ]
            }
        });
    }
    onIsVisible($event) {
        this.searchIsOpen = $event;
    }
    ngOnInit() {
        this.mobileNavState.change.subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen;
        });
        this.initialChart();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    initialChart() {
        this.loader = true;
        this.httpService
            .getChart(this.activeChart, this.period)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe({
            next: (data) => {
                this.InputArray = data;
                const AvgTransPerBlock = [];
                for (let i = 1; i < this.InputArray.length; i++) {
                    AvgTransPerBlock.push([
                        this.InputArray[i].at * 1000,
                        this.InputArray[i].trc
                    ]);
                }
                this.AvgTransPerBlockChart =
                    AvgTransPerBlockComponent.drawChart(false, 'Average Number Of Transactions Per Block', 'Transaction Per Block', (this.seriesData = [
                        {
                            type: 'area',
                            name: 'Transaction Per Block',
                            data: AvgTransPerBlock
                        }
                    ]));
            },
            error: (err) => console.log(err),
            complete: () => (this.loader = false)
        });
    }
}
AvgTransPerBlockComponent.ɵfac = function AvgTransPerBlockComponent_Factory(t) { return new (t || AvgTransPerBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.MobileNavState)); };
AvgTransPerBlockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AvgTransPerBlockComponent, selectors: [["app-avg-trans-per-block"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [["class", "top_box", 4, "ngIf"], [1, "wrap_charts"], ["class", "wrap_loader", 4, "ngIf"], [3, "chart"], [1, "top_box"], [1, "left_box"], [1, "back_btn", 3, "routerLink", "ngClass"], [3, "isVisible"], [1, "wrap_loader"], [1, "loader"]], template: function AvgTransPerBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AvgTransPerBlockComponent_div_0_Template, 5, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AvgTransPerBlockComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.navIsOpen === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loader === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("chart", ctx.AvgTransPerBlockChart);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, angular_highcharts__WEBPACK_IMPORTED_MODULE_4__.ChartDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdmctdHJhbnMtcGVyLWJsb2NrLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4077:
/*!********************************************!*\
  !*** ./src/app/charts/charts.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsComponent": () => (/* binding */ ChartsComponent)
/* harmony export */ });
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-highcharts */ 4072);
/* harmony import */ var app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/subscription-tracker/subscription-tracker */ 8083);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ 5876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.component */ 6392);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);









const _c0 = function (a0) { return { hide_heading: a0 }; };
function ChartsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Charts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-search", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("isVisible", function ChartsComponent_div_0_Template_app_search_isVisible_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.onIsVisible($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, ctx_r0.searchIsOpen === true));
} }
function ChartsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/charts/avg-block-size"]; };
function ChartsComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 10)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Average Block Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("chart", ctx_r2.previewAvgBlockSizeChart);
} }
const _c2 = function () { return ["/charts/avg-trans-per-block"]; };
function ChartsComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 10)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Average Number Of Transactions Per Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("chart", ctx_r3.previewAvgTransPerBlockChart);
} }
function ChartsComponent_a_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 11);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("chart", ctx_r10.previewHashRateChart);
} }
const _c3 = function () { return ["/charts/hash-rate"]; };
function ChartsComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 10)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Hash Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ChartsComponent_a_5_div_3_Template, 1, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.loader !== true);
} }
function ChartsComponent_a_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 11);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("chart", ctx_r11.previewDifficultyPoWChart);
} }
const _c4 = function () { return ["/charts/difficulty-pow"]; };
function ChartsComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 10)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "PoW Difficulty");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ChartsComponent_a_6_div_3_Template, 1, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.loader !== true);
} }
function ChartsComponent_a_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 11);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("chart", ctx_r12.previewDifficultyPoSChart);
} }
const _c5 = function () { return ["/charts/difficulty-pos"]; };
function ChartsComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 10)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "PoS Difficulty");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ChartsComponent_a_7_div_3_Template, 1, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.loader !== true);
} }
const _c6 = function () { return ["/charts/confirm-trans-per-day"]; };
function ChartsComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 10)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Confirmed Transaction Per Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("chart", ctx_r7.previewConfirmTransactPerDayChart);
} }
class ChartsComponent extends app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__.SubscriptionTracker {
    constructor(httpService, mobileNavState) {
        super();
        this.httpService = httpService;
        this.mobileNavState = mobileNavState;
        this.navIsOpen = false;
        this.loader = true;
        this.searchIsOpen = false;
        this.period = 'all';
        this.activeChart = 'all';
    }
    static drawChart(activeChart, titleText, yText, chartsData) {
        return new angular_highcharts__WEBPACK_IMPORTED_MODULE_4__.Chart({
            chart: {
                type: 'line',
                backgroundColor: '#2b3768',
                height: 280,
                // width: 375,
                zoomType: 'x'
            },
            title: {
                text: null,
                style: {
                    color: '#fff',
                    fontSize: '14px'
                }
            },
            credits: { enabled: false },
            exporting: { enabled: false },
            legend: {
                enabled: false,
                itemStyle: {
                    color: '#9eaacc',
                    fontFamily: 'Helvetica'
                },
                itemHoverStyle: {
                    color: '#9eaacc'
                }
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: []
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: activeChart === true ? 1 : 2,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    style: {
                        color: '#9eaacc',
                        fontSize: '11px'
                    },
                    format: '{value:%d.%b}'
                }
            },
            yAxis: {
                floor: 0,
                title: {
                    text: null,
                    style: {
                        color: '#9eaacc'
                    }
                },
                labels: {
                    style: {
                        color: '#9eaacc',
                        fontSize: '11px'
                    }
                }
            },
            // navigator: false,
            rangeSelector: {
                enabled: yText !== 'Transactions',
                // enabled: false,
                buttons: [
                    {
                        type: 'day',
                        count: 1,
                        text: 'day'
                    }
                ],
                selected: 0,
                inputEnabled: false
            },
            series: chartsData
        });
    }
    onIsVisible($event) {
        this.searchIsOpen = $event;
    }
    ngOnInit() {
        this.mobileNavState.change.subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen;
        });
        this.initialChart();
    }
    initialChart() {
        this.loader = true;
        this.httpService
            .getChart(this.activeChart, this.period)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe({
            next: (data) => {
                this.InputArray = data;
                this.ArrayConfirmTransactPerDay = data[0];
                this.ArrayHashrate = data[1];
                const previewAvgBlockSize = [];
                const previewAvgTransPerBlock = [];
                const previewDifficultyPoS = [];
                const previewDifficultyPoW = [];
                const previewHashrate100 = [];
                const previewHashrate400 = [];
                const previewDifficulty120 = [];
                const previewConfirmTransactPerDay = [];
                // AvgBlockSize, AvgTransPerBlock
                for (let i = 0; i < this.InputArray.length; i++) {
                    previewAvgBlockSize.push([
                        this.InputArray[i].at * 1000,
                        this.InputArray[i].bcs
                    ]);
                    previewAvgTransPerBlock.push([
                        this.InputArray[i].at * 1000,
                        this.InputArray[i].trc
                    ]);
                }
                // ConfirmTransactPerDay
                for (let i = 1; i < this.ArrayConfirmTransactPerDay.length; i++) {
                    previewConfirmTransactPerDay.push([
                        this.ArrayConfirmTransactPerDay[i].at * 1000,
                        parseInt(this.ArrayConfirmTransactPerDay[i].sum_trc, 10)
                    ]);
                }
                // Difficulty (PoS/PoW)
                for (let i = 0; i < this.InputArray.length; i++) {
                    if (this.InputArray[i].t === 0) {
                        previewDifficultyPoS.push([
                            this.InputArray[i].at * 1000,
                            parseInt(this.InputArray[i].d, 10)
                        ]);
                    }
                    if (this.InputArray[i].t === 1) {
                        previewDifficultyPoW.push([
                            this.InputArray[i].at * 1000,
                            parseInt(this.InputArray[i].d, 10)
                        ]);
                    }
                }
                // hashRate
                for (let i = 0; i < this.ArrayHashrate.length; i++) {
                    // const hashrate100 = this.ArrayHashrate[i]['hashrate100'] = (i > 99) ? ((this.ArrayHashrate[i]['cumulative_diff_precise'] - this.ArrayHashrate[i - 100]['cumulative_diff_precise']) / (this.ArrayHashrate[i]['actual_timestamp'] - this.ArrayHashrate[i - 100]['actual_timestamp'])) : 0;
                    // const hashrate400 = this.ArrayHashrate[i]['hashrate400'] = (i > 399) ? ((this.ArrayHashrate[i]['cumulative_diff_precise'] - this.ArrayHashrate[i - 400]['cumulative_diff_precise']) / (this.ArrayHashrate[i]['actual_timestamp'] - this.ArrayHashrate[i - 400]['actual_timestamp'])) : 0;
                    previewHashrate100.push([
                        this.ArrayHashrate[i].at * 1000,
                        parseInt(this.ArrayHashrate[i].h100, 10)
                    ]);
                    previewHashrate400.push([
                        this.ArrayHashrate[i].at * 1000,
                        parseInt(this.ArrayHashrate[i].h400, 10)
                    ]);
                    previewDifficulty120.push([
                        this.ArrayHashrate[i].at * 1000,
                        parseInt(this.ArrayHashrate[i].d120, 10)
                    ]);
                }
                this.previewAvgBlockSizeChart = ChartsComponent.drawChart(true, 'Average Block Size', 'MB', (this.seriesData = [
                    {
                        type: 'area',
                        name: 'MB',
                        data: previewAvgBlockSize
                    }
                ]));
                this.previewAvgTransPerBlockChart =
                    ChartsComponent.drawChart(true, 'Average Number Of Transactions Per Block', 'Transaction Per Block', (this.seriesData = [
                        {
                            type: 'area',
                            name: 'Transaction Per Block',
                            data: previewAvgTransPerBlock
                        }
                    ]));
                this.previewDifficultyPoWChart = ChartsComponent.drawChart(true, 'PoW Difficulty', 'PoW Difficulty', (this.seriesData = [
                    {
                        type: 'area',
                        name: 'PoW difficulty',
                        data: previewDifficultyPoW
                    }
                ]));
                this.previewDifficultyPoSChart = ChartsComponent.drawChart(true, 'PoS Difficulty', 'PoS Difficulty', (this.seriesData = [
                    {
                        type: 'area',
                        name: 'PoS difficulty',
                        data: previewDifficultyPoS
                    }
                ]));
                this.previewHashRateChart = ChartsComponent.drawChart(true, 'Hash Rate', 'Hash Rate H/s', (this.seriesData = [
                    {
                        type: 'area',
                        name: 'Hash Rate 100',
                        data: previewHashrate100,
                        color: '#28B463'
                    },
                    {
                        type: 'area',
                        name: 'Hash Rate 400',
                        data: previewHashrate400,
                        color: '#3498DB'
                    },
                    {
                        type: 'area',
                        name: 'Difficulty',
                        data: previewDifficulty120,
                        color: '#d2fe46'
                    }
                ]));
                this.previewConfirmTransactPerDayChart =
                    ChartsComponent.drawChart(true, 'Confirmed Transactions Per Day', 'Transactions', (this.seriesData = [
                        {
                            type: 'area',
                            name: 'Transactions',
                            data: previewConfirmTransactPerDay
                        }
                    ]));
            },
            error: (err) => console.log('error chart', err),
            complete: () => {
                this.loader = false;
            }
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
ChartsComponent.ɵfac = function ChartsComponent_Factory(t) { return new (t || ChartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.MobileNavState)); };
ChartsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ChartsComponent, selectors: [["app-charts"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 8, consts: [["class", "top_box", 4, "ngIf"], [1, "wrap_links_chart"], ["class", "wrap_loader", 4, "ngIf"], [3, "routerLink", 4, "ngIf"], [1, "top_box"], [1, "left_box"], [1, "mobile_heading", 3, "ngClass"], [3, "isVisible"], [1, "wrap_loader"], [1, "loader"], [3, "routerLink"], [3, "chart"], [3, "chart", 4, "ngIf"]], template: function ChartsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ChartsComponent_div_0_Template, 5, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ChartsComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ChartsComponent_a_3_Template, 4, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ChartsComponent_a_4_Template, 4, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ChartsComponent_a_5_Template, 4, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ChartsComponent_a_6_Template, 4, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ChartsComponent_a_7_Template, 4, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ChartsComponent_a_8_Template, 4, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.navIsOpen === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loader === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loader !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loader !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loader !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loader !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loader !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loader !== true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, angular_highcharts__WEBPACK_IMPORTED_MODULE_4__.ChartDirective], styles: [".back_btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.wrap_links_chart[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 32.1%);\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n  justify-content: center;\n}\n\n@media (max-width: 1199px) {\n  .wrap_links_chart[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, 30%);\n  }\n}\n\n@media (max-width: 991px) {\n  .wrap_links_chart[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, 45%);\n  }\n}\n\n@media (max-width: 761px) {\n  .wrap_links_chart[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, 45%);\n  }\n}\n\n@media (max-width: 575px) {\n  .wrap_links_chart[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, 100%);\n  }\n}\n\n.wrap_links_chart[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: #2b3768;\n  color: #fff;\n  line-height: 1.3;\n  border: none;\n  padding-top: 10px;\n  overflow: hidden;\n}\n\n.wrap_links_chart[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%] {\n  color: #65ffe7;\n}\n\n.wrap_links_chart[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  color: #9eaacc;\n  width: 100%;\n  height: 65px;\n  justify-content: center;\n  align-items: flex-start;\n  text-align: center;\n  font-size: 14px;\n  letter-spacing: 0.5px;\n  padding: 18px 10px 0 10px;\n}\n\n.wrap_links_chart[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n}\n\n.wrap_charts[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 750px;\n  background-color: #2b3768;\n  position: relative;\n  padding-top: 25px;\n  padding-bottom: 25px;\n}\n\n.wrap_charts[_ngcontent-%COMP%]   .period_filter[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.wrap_charts[_ngcontent-%COMP%]   .period_filter[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  border-radius: 10px;\n  background-color: #32439f;\n  transition: 0.2s;\n  border: none;\n  color: #fff;\n  margin: 0 3px;\n  white-space: nowrap;\n  opacity: 0.6;\n}\n\n.wrap_charts[_ngcontent-%COMP%]   .period_filter[_ngcontent-%COMP%]    > button.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy5jb21wb25lbnQuc2NzcyIsIi4uLy4uL2Fzc2V0cy9zdHlsZXMvYmFzZS9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOENBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUNpREk7RUR2REo7SUFPUSw0Q0FBQTtFQUdOO0FBQ0Y7O0FDd0RJO0VEbkVKO0lBVVEsNENBQUE7RUFLTjtBQUNGOztBQ3lESTtFRHpFSjtJQWFRLDRDQUFBO0VBT047QUFDRjs7QUMwREk7RUQvRUo7SUFnQlEsNkNBQUE7RUFTTjtBQUNGOztBQVJJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVVSOztBQVRRO0VBQ0ksY0FBQTtBQVdaOztBQVRRO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBV1o7O0FBVFE7RUFDSSxZQUFBO0FBV1o7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBU0o7O0FBUkk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFVUjs7QUFUUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVVaOztBQVRZO0VBQ0ksVUFBQTtBQVdoQiIsImZpbGUiOiJjaGFydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzL2Jhc2UvbWl4aW5zJztcbi5iYWNrX2J0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLndyYXBfbGlua3NfY2hhcnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDMyLjElKTtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIEBpbmNsdWRlIG1heDExOTkge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMzAlKTtcbiAgICB9XG4gICAgQGluY2x1ZGUgbWF4OTkxIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDQ1JSk7XG4gICAgfVxuICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCA0NSUpO1xuICAgIH1cbiAgICBAaW5jbHVkZSBtYXg1NzUge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMTAwJSk7XG4gICAgfVxuICAgID4gYSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjM3Njg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzY1ZmZlNztcbiAgICAgICAgfVxuICAgICAgICA+IHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGNvbG9yOiAjOWVhYWNjO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMThweCAxMHB4IDAgMTBweDtcbiAgICAgICAgfVxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLndyYXBfY2hhcnRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDc1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjM3Njg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIC5wZXJpb2RfZmlsdGVyIHtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgPiBidXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0MzlmO1xuICAgICAgICAgICAgLy9wYWRkaW5nOiAycHggMTVweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIG1hcmdpbjogMCAzcHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAbWl4aW4gdGV4dC10cnVuY2F0ZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1peGluIHRleHRXcmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBsaW5lLWJyZWFrOiBzdHJpY3Q7XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG59XG5AbWl4aW4gY292ZXJCb3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5AbWl4aW4gYWJzKCR0b3A6IGF1dG8sICRyaWdodDogYXV0bywgJGJvdHRvbTogYXV0bywgJGxlZnQ6IGF1dG8pIHtcbiAgICB0b3A6ICR0b3A7XG4gICAgcmlnaHQ6ICRyaWdodDtcbiAgICBib3R0b206ICRib3R0b207XG4gICAgbGVmdDogJGxlZnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuQG1peGluIGNvdmVySW1nIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cbkBtaXhpbiB2YWxpbmdCb3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5AbWl4aW4gdW5TZWxlY3Qge1xuICAgIC13ZWJraXQtdG91Y2gtY29sbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbkBtaXhpbiBjbGVhcmZpeCB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuQG1peGluIG1heDExOTkge1xuICAgIC8vIG1ha2V0IDExNzFcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtYXgxMTcwIHtcbiAgICAvLyBtYWtldHMgOTkyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNzBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbWF4OTkxIHtcbiAgICAvLyBtYWtldHMgNzYyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtYXg3NjEge1xuICAgIC8vIG1ha2V0cyA1NzZcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzYxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1heDU3NSB7XG4gICAgLy8gbWFrZXRzIDQwMFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbW9iaWxlIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIHRyaWFuZ2xlVXAoJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXI6ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206ICRoIHNvbGlkICRjb2xvcjtcbn1cbkBtaXhpbiB0cmlhbmdsZURvd24oJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wOiAkaCBzb2xpZCAkY29sb3I7XG59XG5AbWl4aW4gdHJpYW5nbGVMZWZ0KCR3OiAyMHB4LCAkaDogMjBweCwgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAkaCBzb2xpZCAkY29sb3I7XG59XG5AbWl4aW4gdHJpYW5nbGVSaWdodCgkdzogMjBweCwgJGg6IDIwcHgsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAkaCBzb2xpZCAkY29sb3I7XG59XG5AbWl4aW4gdHJpYW5nbGVUb3BMZWZ0KCR3OiAyMHB4LCAkaDogMjBweCwgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogJHcgc29saWQgJGNvbG9yO1xuICAgIGJvcmRlci1yaWdodDogJGggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5AbWl4aW4gcGFyYWxsZWxvZ3JhbSgkdzogMTUwcHgsICRoOiAxMDBweCwgJHNrZXc6IDIwZGVnLCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAkdztcbiAgICBoZWlnaHQ6ICRoO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KCRza2V3KTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2tldygkc2tldyk7XG4gICAgLW8tdHJhbnNmb3JtOiBza2V3KCRza2V3KTtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4gICAgPiBzcGFuLFxuICAgIGEsXG4gICAgYWRkcmVzcyB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0kc2tldyk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBza2V3KC0kc2tldyk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogc2tldygtJHNrZXcpO1xuICAgIH1cbn1cbkBtaXhpbiBib3R0b21MaW5lKCRoOiA4cHgsICRjb2xvcjogIzAwYjliZikge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAkaDtcbn1cbkBtaXhpbiBjZW50ZXItYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbkBtaXhpbiBpY29DZW50ZXIge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbkBtaXhpbiBwc2V1ZG8oJGRpc3BsYXk6IGJsb2NrLCAkcG9zOiBhYnNvbHV0ZSwgJGNvbnRlbnQ6ICcnKSB7XG4gICAgY29udGVudDogJGNvbnRlbnQ7XG4gICAgZGlzcGxheTogJGRpc3BsYXk7XG4gICAgcG9zaXRpb246ICRwb3M7XG59XG5AbWl4aW4gYmFydGJsb2NrIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzIzNGVlMiwgMC4xKTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 1662:
/*!*********************************************************************************!*\
  !*** ./src/app/charts/confirm-trans-per-day/confirm-trans-per-day.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmTransPerDayComponent": () => (/* binding */ ConfirmTransPerDayComponent)
/* harmony export */ });
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-highcharts */ 4072);
/* harmony import */ var app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/subscription-tracker/subscription-tracker */ 8083);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http.service */ 5876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../search/search.component */ 6392);









const _c0 = function () { return ["/charts"]; };
const _c1 = function (a0) { return { hide_back_btn: a0 }; };
function ConfirmTransPerDayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-search", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("isVisible", function ConfirmTransPerDayComponent_div_0_Template_app_search_isVisible_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.onIsVisible($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, ctx_r0.searchIsOpen === true));
} }
function ConfirmTransPerDayComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class ConfirmTransPerDayComponent extends app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__.SubscriptionTracker {
    constructor(httpService, mobileNavState) {
        super();
        this.httpService = httpService;
        this.mobileNavState = mobileNavState;
        this.navIsOpen = false;
        this.searchIsOpen = false;
        this.activeChart = 'ConfirmTransactPerDay';
        this.period = 'all';
    }
    static drawChart(activeChart, titleText, yText, chartsData) {
        return new angular_highcharts__WEBPACK_IMPORTED_MODULE_4__.Chart({
            chart: {
                type: 'line',
                backgroundColor: '#2b3768',
                height: 700,
                width: null,
                zoomType: 'x'
            },
            title: {
                text: titleText,
                style: {
                    color: '#fff',
                    fontSize: '18px'
                }
            },
            credits: { enabled: false },
            exporting: { enabled: false },
            legend: {
                enabled: true,
                itemStyle: {
                    color: '#9eaacc',
                    fontFamily: 'Helvetica'
                },
                itemHoverStyle: {
                    color: '#9eaacc'
                }
            },
            tooltip: {
                enabled: true,
                shared: true,
                valueDecimals: 0,
                xDateFormat: '%Y/%m/%d %H:%M',
                pointFormatter: function () {
                    const point = this;
                    return ('<b style="color:' +
                        point.color +
                        '">\u25CF</b> ' +
                        point.series.name +
                        ': <b>' +
                        point.y +
                        '</b><br/>');
                }
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: []
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 2,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    style: {
                        color: '#9eaacc',
                        fontSize: '11px'
                    },
                    format: '{value:%d.%b}'
                }
            },
            yAxis: {
                floor: 0,
                title: {
                    text: yText,
                    style: {
                        color: '#9eaacc'
                    }
                },
                labels: {
                    style: {
                        color: '#9eaacc',
                        fontSize: '11px'
                    }
                }
            },
            navigator: { enabled: true },
            rangeSelector: {
                // height: 60,
                enabled: true,
                allButtonsEnabled: true,
                buttons: [
                    {
                        type: 'day',
                        count: 1,
                        text: 'day'
                    },
                    {
                        type: 'week',
                        count: 1,
                        text: 'week'
                    },
                    {
                        type: 'month',
                        count: 1,
                        text: 'month'
                    },
                    {
                        type: 'month',
                        count: 3,
                        text: 'quarter'
                    },
                    {
                        type: 'year',
                        count: 1,
                        text: 'year'
                    },
                    {
                        type: 'all',
                        text: 'all'
                    }
                ],
                selected: 1,
                labelStyle: {
                    color: '#9eaacc'
                },
                inputStyle: {
                    color: '#9eaacc',
                    backgroundColor: '#2b3768'
                },
                inputBoxBorderColor: '#9eaacc',
                inputBoxWidth: 120,
                inputBoxHeight: 16,
                buttonTheme: {
                    width: 60,
                    fill: '#32439f',
                    style: {
                        color: '#fff',
                        fontSize: '14px',
                        fontFamily: 'Helvetica',
                        fontWeight: '300',
                        opacity: 1
                    },
                    states: {
                        hover: {
                            fill: '#32439f'
                        },
                        select: {
                            fill: '#32439f',
                            stroke: '#fff',
                            'stroke-width': 1,
                            style: {
                                color: '#fff',
                                opacity: 1,
                                fontWeight: 400
                            }
                        },
                        disabled: {
                            fill: '#32439f',
                            style: {
                                color: '#fff',
                                opacity: 0.5,
                                fontWeight: 400,
                                cursor: 'default'
                            }
                        }
                    }
                }
            },
            series: chartsData,
            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 575
                        },
                        chartOptions: {
                            chart: {
                                width: 575
                            },
                            rangeSelector: {
                                // height: 100,
                                inputPosition: {
                                    align: 'left'
                                }
                            }
                        }
                    }
                ]
            }
        });
    }
    onIsVisible($event) {
        this.searchIsOpen = $event;
    }
    ngOnInit() {
        this.mobileNavState.change.subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen;
        });
        this.initialChart();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    initialChart() {
        this.loader = true;
        this.httpService
            .getChart(this.activeChart, this.period)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe({
            next: (data) => {
                this.InputArray = data;
                const ConfirmTransactPerDay = [];
                for (let i = 1; i < this.InputArray.length; i++) {
                    ConfirmTransactPerDay.push([
                        this.InputArray[i].at * 1000,
                        this.InputArray[i].sum_trc
                    ]);
                }
                this.ConfirmTransactPerDayChart =
                    ConfirmTransPerDayComponent.drawChart(false, 'Confirmed Transactions Per Day', 'Transactions', (this.seriesData = [
                        {
                            type: 'area',
                            name: 'Transactions',
                            data: ConfirmTransactPerDay
                        }
                    ]));
            },
            error: (err) => console.log(err),
            complete: () => (this.loader = false)
        });
    }
}
ConfirmTransPerDayComponent.ɵfac = function ConfirmTransPerDayComponent_Factory(t) { return new (t || ConfirmTransPerDayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.MobileNavState)); };
ConfirmTransPerDayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ConfirmTransPerDayComponent, selectors: [["app-confirm-trans-per-day"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [["class", "top_box", 4, "ngIf"], [1, "wrap_charts"], ["class", "wrap_loader", 4, "ngIf"], [3, "chart"], [1, "top_box"], [1, "left_box"], [1, "back_btn", 3, "routerLink", "ngClass"], [3, "isVisible"], [1, "wrap_loader"], [1, "loader"]], template: function ConfirmTransPerDayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ConfirmTransPerDayComponent_div_0_Template, 5, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ConfirmTransPerDayComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.navIsOpen === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loader === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("chart", ctx.ConfirmTransactPerDayChart);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, angular_highcharts__WEBPACK_IMPORTED_MODULE_4__.ChartDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLXRyYW5zLXBlci1kYXkuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1395:
/*!*******************************************************************!*\
  !*** ./src/app/charts/difficulty-pow/difficulty-pow.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DifficultyPowComponent": () => (/* binding */ DifficultyPowComponent)
/* harmony export */ });
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-highcharts */ 4072);
/* harmony import */ var app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/subscription-tracker/subscription-tracker */ 8083);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http.service */ 5876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../search/search.component */ 6392);









const _c0 = function () { return ["/charts"]; };
const _c1 = function (a0) { return { hide_back_btn: a0 }; };
function DifficultyPowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-search", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("isVisible", function DifficultyPowComponent_div_0_Template_app_search_isVisible_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.onIsVisible($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, ctx_r0.searchIsOpen === true));
} }
function DifficultyPowComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class DifficultyPowComponent extends app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__.SubscriptionTracker {
    constructor(httpService, mobileNavState) {
        super();
        this.httpService = httpService;
        this.mobileNavState = mobileNavState;
        this.seriesType = 'other';
        this.navIsOpen = false;
        this.searchIsOpen = false;
        this.activeChart = 'pow-difficulty';
        this.period = 'all';
    }
    drawChart(activeChart, titleText, yText, chartsData) {
        const that = this;
        return new angular_highcharts__WEBPACK_IMPORTED_MODULE_4__.Chart({
            chart: {
                type: 'line',
                backgroundColor: '#2b3768',
                height: 700,
                width: null,
                zoomType: 'x'
            },
            title: {
                text: titleText,
                style: {
                    color: '#fff',
                    fontSize: '18px'
                }
            },
            credits: { enabled: false },
            exporting: { enabled: false },
            legend: {
                enabled: false,
                itemStyle: {
                    color: '#9eaacc',
                    fontFamily: 'Helvetica'
                },
                itemHoverStyle: {
                    color: '#9eaacc'
                }
            },
            tooltip: {
                enabled: true,
                valueDecimals: 0,
                xDateFormat: '%Y/%m/%d %H:%M',
                pointFormatter: function () {
                    const point = this;
                    return ('<b style="color:' +
                        point.color +
                        '">\u25CF</b> ' +
                        point.series.name +
                        ': <b>' +
                        point.y +
                        '</b><br/>');
                },
                // crosshairs: true,
                shared: true
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: []
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 2,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    style: {
                        color: '#9eaacc',
                        fontSize: '11px'
                    },
                    format: '{value:%d.%b}'
                }
            },
            yAxis: {
                floor: 0,
                title: {
                    text: yText,
                    style: {
                        color: '#9eaacc'
                    }
                },
                labels: {
                    style: {
                        color: '#9eaacc',
                        fontSize: '11px'
                    }
                }
            },
            navigator: { enabled: true },
            rangeSelector: {
                enabled: true,
                allButtonsEnabled: true,
                buttons: [
                    {
                        type: 'day',
                        count: 1,
                        text: 'day',
                        events: {
                            click: function (e) {
                                that.changeSource('day');
                            }
                        }
                    },
                    {
                        type: 'week',
                        count: 1,
                        text: 'week',
                        events: {
                            click: function (e) {
                                that.changeSource('other');
                            }
                        }
                    },
                    {
                        type: 'month',
                        count: 1,
                        text: 'month',
                        events: {
                            click: function (e) {
                                that.changeSource('other');
                            }
                        }
                    },
                    {
                        type: 'month',
                        count: 3,
                        text: 'quarter',
                        events: {
                            click: function (e) {
                                that.changeSource('other');
                            }
                        }
                    },
                    {
                        type: 'year',
                        count: 1,
                        text: 'year',
                        events: {
                            click: function (e) {
                                that.changeSource('other');
                            }
                        }
                    },
                    {
                        type: 'all',
                        text: 'all',
                        events: {
                            click: function (e) {
                                that.changeSource('other');
                            }
                        }
                    }
                ],
                selected: 1,
                labelStyle: {
                    color: '#9eaacc'
                },
                inputStyle: {
                    color: '#9eaacc',
                    backgroundColor: '#2b3768'
                },
                inputBoxBorderColor: '#9eaacc',
                inputBoxWidth: 120,
                inputBoxHeight: 16,
                buttonTheme: {
                    width: 60,
                    fill: '#32439f',
                    style: {
                        color: '#fff',
                        fontSize: '14px',
                        fontFamily: 'Helvetica',
                        fontWeight: '300',
                        opacity: 1
                    },
                    states: {
                        hover: {
                            fill: '#32439f'
                        },
                        select: {
                            fill: '#32439f',
                            stroke: '#fff',
                            'stroke-width': 1,
                            style: {
                                color: '#fff',
                                opacity: 1,
                                fontWeight: 400
                            }
                        },
                        disabled: {
                            fill: '#32439f',
                            style: {
                                color: '#fff',
                                opacity: 0.5,
                                fontWeight: 400,
                                cursor: 'default'
                            }
                        }
                    }
                }
            },
            series: chartsData,
            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 575
                        },
                        chartOptions: {
                            chart: {
                                width: 575
                            },
                            rangeSelector: {
                                // height: 100,
                                inputPosition: {
                                    align: 'left'
                                }
                            }
                        }
                    }
                ]
            }
        });
    }
    changeSource(value) {
        if (this.seriesType !== value) {
            this.seriesType = value;
            let chartData = [];
            if (value === 'day') {
                chartData = this.powDifficulty.detailed;
            }
            else {
                chartData = this.powDifficulty.aggregated;
            }
            const powDifficultyArray = [];
            for (let i = 1; i < chartData.length; i++) {
                powDifficultyArray.push([
                    chartData[i].at * 1000,
                    parseInt(chartData[i].d, 10)
                ]);
            }
            this.difficultyChart.removeSeries(0);
            this.difficultyChart.addSeries({
                type: 'area',
                name: 'PoW difficulty',
                data: powDifficultyArray
            }, true, true);
        }
    }
    onIsVisible($event) {
        this.searchIsOpen = $event;
    }
    ngOnInit() {
        this.mobileNavState.change.subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen;
        });
        this.initialChart();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    initialChart() {
        this.loader = true;
        this.httpService
            .getChart(this.activeChart, this.period)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe({
            next: (data) => {
                this.powDifficulty = data;
                const powDifficultyArray = [];
                for (let i = 1; i < this.powDifficulty.aggregated.length; i++) {
                    powDifficultyArray.push([
                        this.powDifficulty.aggregated[i].at * 1000,
                        parseInt(this.powDifficulty.aggregated[i].d, 10)
                    ]);
                }
                this.difficultyChart = this.drawChart(false, 'PoW Difficulty', 'PoW Difficulty', (this.seriesData = [
                    {
                        type: 'area',
                        name: 'PoW difficulty',
                        data: powDifficultyArray
                    }
                ]));
            },
            error: (err) => console.log(err),
            complete: () => (this.loader = false)
        });
    }
}
DifficultyPowComponent.ɵfac = function DifficultyPowComponent_Factory(t) { return new (t || DifficultyPowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.MobileNavState)); };
DifficultyPowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DifficultyPowComponent, selectors: [["app-difficulty-pow"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [["class", "top_box", 4, "ngIf"], [1, "wrap_charts"], ["class", "wrap_loader", 4, "ngIf"], [3, "chart"], [1, "top_box"], [1, "left_box"], [1, "back_btn", 3, "routerLink", "ngClass"], [3, "isVisible"], [1, "wrap_loader"], [1, "loader"]], template: function DifficultyPowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DifficultyPowComponent_div_0_Template, 5, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DifficultyPowComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.navIsOpen === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loader === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("chart", ctx.difficultyChart);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, angular_highcharts__WEBPACK_IMPORTED_MODULE_4__.ChartDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWZmaWN1bHR5LXBvdy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3018:
/*!***********************************************************!*\
  !*** ./src/app/charts/difficulty/difficulty.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DifficultyComponent": () => (/* binding */ DifficultyComponent)
/* harmony export */ });
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-highcharts */ 4072);
/* harmony import */ var app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/subscription-tracker/subscription-tracker */ 8083);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http.service */ 5876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../search/search.component */ 6392);









const _c0 = function () { return ["/charts"]; };
const _c1 = function (a0) { return { hide_back_btn: a0 }; };
function DifficultyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-search", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("isVisible", function DifficultyComponent_div_0_Template_app_search_isVisible_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.onIsVisible($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, ctx_r0.searchIsOpen === true));
} }
function DifficultyComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class DifficultyComponent extends app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__.SubscriptionTracker {
    constructor(httpService, mobileNavState) {
        super();
        this.httpService = httpService;
        this.mobileNavState = mobileNavState;
        this.seriesType = 'other';
        this.navIsOpen = false;
        this.searchIsOpen = false;
        this.activeChart = 'pos-difficulty';
        this.period = 'all';
    }
    // PoS Difficulty
    drawChart(activeChart, titleText, yText, chartsData) {
        const that = this;
        return new angular_highcharts__WEBPACK_IMPORTED_MODULE_4__.Chart({
            chart: {
                type: 'line',
                backgroundColor: '#2b3768',
                height: 700,
                width: null,
                zoomType: 'x'
            },
            title: {
                text: titleText,
                style: {
                    color: '#fff',
                    fontSize: '18px'
                }
            },
            credits: { enabled: false },
            exporting: { enabled: false },
            legend: {
                enabled: false,
                itemStyle: {
                    color: '#9eaacc',
                    fontFamily: 'Helvetica'
                },
                itemHoverStyle: {
                    color: '#9eaacc'
                }
            },
            tooltip: {
                enabled: true,
                valueDecimals: 0,
                xDateFormat: '%Y/%m/%d %H:%M',
                pointFormatter: function () {
                    const point = this;
                    return ('<b style="color:' +
                        point.color +
                        '">\u25CF</b> ' +
                        point.series.name +
                        ': <b>' +
                        point.y +
                        '</b><br/>');
                },
                // crosshairs: true,
                shared: true
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: []
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 2,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    style: {
                        color: '#9eaacc',
                        fontSize: '11px'
                    },
                    format: '{value:%d.%b}'
                }
            },
            yAxis: {
                floor: 0,
                title: {
                    text: yText,
                    style: {
                        color: '#9eaacc'
                    }
                },
                labels: {
                    style: {
                        color: '#9eaacc',
                        fontSize: '11px'
                    }
                }
            },
            navigator: { enabled: true },
            rangeSelector: {
                enabled: true,
                allButtonsEnabled: true,
                buttons: [
                    {
                        type: 'day',
                        count: 1,
                        text: 'day',
                        events: {
                            click: function (e) {
                                that.changeSource('day');
                            }
                        }
                    },
                    {
                        type: 'week',
                        count: 1,
                        text: 'week',
                        events: {
                            click: function (e) {
                                that.changeSource('other');
                            }
                        }
                    },
                    {
                        type: 'month',
                        count: 1,
                        text: 'month',
                        events: {
                            click: function (e) {
                                that.changeSource('other');
                            }
                        }
                    },
                    {
                        type: 'month',
                        count: 3,
                        text: 'quarter',
                        events: {
                            click: function (e) {
                                that.changeSource('other');
                            }
                        }
                    },
                    {
                        type: 'year',
                        count: 1,
                        text: 'year',
                        events: {
                            click: function (e) {
                                that.changeSource('other');
                            }
                        }
                    },
                    {
                        type: 'all',
                        text: 'all',
                        events: {
                            click: function (e) {
                                that.changeSource('other');
                            }
                        }
                    }
                ],
                selected: 1,
                labelStyle: {
                    color: '#9eaacc'
                },
                inputStyle: {
                    color: '#9eaacc',
                    backgroundColor: '#2b3768'
                },
                inputBoxBorderColor: '#9eaacc',
                inputBoxWidth: 120,
                inputBoxHeight: 16,
                buttonTheme: {
                    width: 60,
                    fill: '#32439f',
                    style: {
                        color: '#fff',
                        fontSize: '14px',
                        fontFamily: 'Helvetica',
                        fontWeight: '300',
                        opacity: 1
                    },
                    states: {
                        hover: {
                            fill: '#32439f'
                        },
                        select: {
                            fill: '#32439f',
                            stroke: '#fff',
                            'stroke-width': 1,
                            style: {
                                color: '#fff',
                                opacity: 1,
                                fontWeight: 400
                            }
                        },
                        disabled: {
                            fill: '#32439f',
                            style: {
                                color: '#fff',
                                opacity: 0.5,
                                fontWeight: 400,
                                cursor: 'default'
                            }
                        }
                    }
                }
            },
            series: chartsData,
            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 575
                        },
                        chartOptions: {
                            chart: {
                                width: 575
                            },
                            rangeSelector: {
                                // height: 100,
                                inputPosition: {
                                    align: 'left'
                                }
                            }
                        }
                    }
                ]
            }
        });
    }
    changeSource(value) {
        if (this.seriesType !== value) {
            this.seriesType = value;
            let chartData = [];
            if (value === 'day') {
                chartData = this.posDifficulty.detailed;
            }
            else {
                chartData = this.posDifficulty.aggregated;
            }
            const posDifficultyArray = [];
            for (let i = 1; i < chartData.length; i++) {
                posDifficultyArray.push([
                    chartData[i].at * 1000,
                    parseInt(chartData[i].d, 10)
                ]);
            }
            this.difficultyChart.removeSeries(0);
            this.difficultyChart.addSeries({
                type: 'area',
                name: 'PoS difficulty',
                data: posDifficultyArray
            }, true, true);
        }
    }
    onIsVisible($event) {
        this.searchIsOpen = $event;
    }
    ngOnInit() {
        this.mobileNavState.change.subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen;
        });
        this.initialChart();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    initialChart() {
        this.loader = true;
        this.httpService
            .getChart(this.activeChart, this.period)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe({
            next: (data) => {
                this.posDifficulty = data;
                const posDifficultyArray = [];
                for (let i = 1; i < this.posDifficulty.aggregated.length; i++) {
                    posDifficultyArray.push([
                        this.posDifficulty.aggregated[i].at * 1000,
                        parseInt(this.posDifficulty.aggregated[i].d, 10)
                    ]);
                }
                this.difficultyChart = this.drawChart(false, 'PoS Difficulty', 'PoS Difficulty', (this.seriesData = [
                    {
                        type: 'area',
                        name: 'PoS difficulty',
                        data: posDifficultyArray
                    }
                ]));
            },
            error: (err) => console.log(err),
            complete: () => (this.loader = false)
        });
    }
}
DifficultyComponent.ɵfac = function DifficultyComponent_Factory(t) { return new (t || DifficultyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.MobileNavState)); };
DifficultyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DifficultyComponent, selectors: [["app-difficulty"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [["class", "top_box", 4, "ngIf"], [1, "wrap_charts"], ["class", "wrap_loader", 4, "ngIf"], [3, "chart"], [1, "top_box"], [1, "left_box"], [1, "back_btn", 3, "routerLink", "ngClass"], [3, "isVisible"], [1, "wrap_loader"], [1, "loader"]], template: function DifficultyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DifficultyComponent_div_0_Template, 5, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DifficultyComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.navIsOpen === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loader === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("chart", ctx.difficultyChart);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, angular_highcharts__WEBPACK_IMPORTED_MODULE_4__.ChartDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWZmaWN1bHR5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8009:
/*!*******************************************************!*\
  !*** ./src/app/charts/hashrate/hashrate.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HashrateComponent": () => (/* binding */ HashrateComponent)
/* harmony export */ });
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-highcharts */ 4072);
/* harmony import */ var app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/subscription-tracker/subscription-tracker */ 8083);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http.service */ 5876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../search/search.component */ 6392);









const _c0 = function () { return ["/charts"]; };
const _c1 = function (a0) { return { hide_back_btn: a0 }; };
function HashrateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-search", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("isVisible", function HashrateComponent_div_0_Template_app_search_isVisible_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.onIsVisible($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, ctx_r0.searchIsOpen === true));
} }
function HashrateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class HashrateComponent extends app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__.SubscriptionTracker {
    constructor(httpService, mobileNavState) {
        super();
        this.httpService = httpService;
        this.mobileNavState = mobileNavState;
        this.navIsOpen = false;
        this.searchIsOpen = false;
        this.activeChart = 'hashRate';
        this.period = 'all';
    }
    static drawChart(activeChart, titleText, yText, chartsData) {
        return new angular_highcharts__WEBPACK_IMPORTED_MODULE_4__.Chart({
            chart: {
                type: 'line',
                backgroundColor: '#2b3768',
                height: 700,
                width: null,
                zoomType: 'x'
            },
            title: {
                text: titleText,
                style: {
                    color: '#fff',
                    fontSize: '18px'
                }
            },
            credits: { enabled: false },
            exporting: { enabled: false },
            legend: {
                enabled: true,
                itemStyle: {
                    color: '#9eaacc',
                    fontFamily: 'Helvetica'
                },
                itemHoverStyle: {
                    color: '#9eaacc'
                }
            },
            tooltip: {
                enabled: true,
                valueDecimals: 0,
                xDateFormat: '%Y/%m/%d %H:%M',
                pointFormatter: function () {
                    const point = this;
                    return ('<b style="color:' +
                        point.color +
                        '">\u25CF</b> ' +
                        point.series.name +
                        ': <b>' +
                        point.y +
                        '</b><br/>');
                },
                shared: true
                // crosshairs: true,
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: []
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 2,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    style: {
                        color: '#9eaacc',
                        fontSize: '11px'
                    },
                    format: '{value:%d.%b}'
                }
            },
            yAxis: {
                floor: 0,
                title: {
                    text: yText,
                    style: {
                        color: '#9eaacc'
                    }
                },
                labels: {
                    style: {
                        color: '#9eaacc',
                        fontSize: '11px'
                    }
                }
            },
            navigator: { enabled: true },
            rangeSelector: {
                // height: 60,
                enabled: true,
                allButtonsEnabled: true,
                buttons: [
                    {
                        type: 'day',
                        count: 1,
                        text: 'day'
                    },
                    {
                        type: 'week',
                        count: 1,
                        text: 'week'
                    },
                    {
                        type: 'month',
                        count: 1,
                        text: 'month'
                    },
                    {
                        type: 'month',
                        count: 3,
                        text: 'quarter'
                    },
                    {
                        type: 'year',
                        count: 1,
                        text: 'year'
                    },
                    {
                        type: 'all',
                        text: 'all'
                    }
                ],
                selected: 1,
                labelStyle: {
                    color: '#9eaacc'
                },
                inputStyle: {
                    color: '#9eaacc',
                    backgroundColor: '#2b3768'
                },
                inputBoxBorderColor: '#9eaacc',
                inputBoxWidth: 120,
                inputBoxHeight: 16,
                buttonTheme: {
                    width: 60,
                    fill: '#32439f',
                    style: {
                        color: '#fff',
                        fontSize: '14px',
                        fontFamily: 'Helvetica',
                        fontWeight: '300',
                        opacity: 1
                    },
                    states: {
                        hover: {
                            fill: '#32439f'
                        },
                        select: {
                            fill: '#32439f',
                            stroke: '#fff',
                            'stroke-width': 1,
                            style: {
                                color: '#fff',
                                opacity: 1,
                                fontWeight: 400
                            }
                        },
                        disabled: {
                            fill: '#32439f',
                            style: {
                                color: '#fff',
                                opacity: 0.5,
                                fontWeight: 400,
                                cursor: 'default'
                            }
                        }
                    }
                }
            },
            series: chartsData,
            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 575
                        },
                        chartOptions: {
                            chart: {
                                width: 575
                            },
                            rangeSelector: {
                                // height: 100,
                                inputPosition: {
                                    align: 'left'
                                }
                            }
                        }
                    }
                ]
            }
        });
    }
    onIsVisible($event) {
        this.searchIsOpen = $event;
    }
    ngOnInit() {
        this.mobileNavState.change.subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen;
        });
        this.initialChart();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    initialChart() {
        this.loader = true;
        this.httpService
            .getChart(this.activeChart, this.period)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe({
            next: (data) => {
                this.InputArray = data;
                const difficultyArray = [];
                const hashRate100 = [];
                const hashRate400 = [];
                for (let i = 1; i < this.InputArray.length; i++) {
                    hashRate100.push([
                        this.InputArray[i].at * 1000,
                        parseInt(this.InputArray[i].h100, 10)
                    ]);
                    hashRate400.push([
                        this.InputArray[i].at * 1000,
                        parseInt(this.InputArray[i].h400, 10)
                    ]);
                    difficultyArray.push([
                        this.InputArray[i].at * 1000,
                        parseInt(this.InputArray[i].d120, 10)
                    ]);
                }
                this.hashRateChart = HashrateComponent.drawChart(false, 'Hash Rate', 'Hash Rate H/s', (this.seriesData = [
                    {
                        type: 'area',
                        name: 'Hash Rate 100',
                        data: hashRate100,
                        color: '#28B463'
                    },
                    {
                        type: 'area',
                        name: 'Hash Rate 400',
                        data: hashRate400,
                        color: '#3498DB'
                    },
                    {
                        type: 'area',
                        name: 'Difficulty',
                        data: difficultyArray,
                        color: '#d2fe46'
                    }
                ]));
            },
            error: (err) => console.log(err),
            complete: () => (this.loader = false)
        });
    }
}
HashrateComponent.ɵfac = function HashrateComponent_Factory(t) { return new (t || HashrateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.MobileNavState)); };
HashrateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HashrateComponent, selectors: [["app-hashrate"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [["class", "top_box", 4, "ngIf"], [1, "wrap_charts"], ["class", "wrap_loader", 4, "ngIf"], [3, "chart"], [1, "top_box"], [1, "left_box"], [1, "back_btn", 3, "routerLink", "ngClass"], [3, "isVisible"], [1, "wrap_loader"], [1, "loader"]], template: function HashrateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, HashrateComponent_div_0_Template, 5, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, HashrateComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.navIsOpen === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loader === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("chart", ctx.hashRateChart);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, angular_highcharts__WEBPACK_IMPORTED_MODULE_4__.ChartDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoYXNocmF0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5029:
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogComponent": () => (/* binding */ DialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);




function DialogComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_div_0_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DialogComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_div_0_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DialogComponent_div_0_button_4_Template, 1, 0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DialogComponent_div_0_div_5_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@dialog", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.closable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.visible);
} }
const _c0 = ["*"];
class DialogComponent {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.closable = true;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() { }
    ngAfterViewInit() { }
    ngOnDestroy() { }
    ngOnChanges(change) {
        if (change.visible.currentValue === true) {
            this.renderer.addClass(document.body, 'dialog-open');
            window.location.hash = '#modalOpen';
            setTimeout(() => {
                const dialog = this.el.nativeElement.querySelector('.dialog');
                if (dialog.clientHeight > window.innerHeight) {
                    this.renderer.addClass(dialog, 'dialog-top');
                }
                else {
                    this.renderer.addClass(dialog, 'dialog-center');
                }
            }, 50);
        }
        else {
            this.renderer.removeClass(document.body, 'dialog-open');
        }
    }
    hashchangeFunc(event) {
        if (event.type === 'hashchange') {
            window.location.hash === '#modalOpen'
                ? (this.visible = true)
                : (this.visible = false);
        }
    }
    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
        window.location.hash = '';
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
DialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog"]], hostBindings: function DialogComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hashchange", function DialogComponent_hashchange_HostBindingHandler($event) { return ctx.hashchangeFunc($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { closable: "closable", visible: "visible" }, outputs: { visibleChange: "visibleChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["class", "dialog__main", 4, "ngIf"], [1, "dialog__main"], [1, "dialog__parent"], [1, "dialog"], ["class", "dialog__close-btn", 3, "click", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], [1, "dialog__close-btn", 3, "click"], [1, "overlay", 3, "click"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DialogComponent_div_0_Template, 6, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  z-index: 999;\n}\n\n.dialog__main[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.dialog__main[_ngcontent-%COMP%]   .dialog__parent[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  overflow: auto;\n  height: 100%;\n  z-index: 1;\n}\n\n.dialog__main[_ngcontent-%COMP%]   .dialog__parent[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-width: 520px;\n  padding: 35px;\n  background: linear-gradient(to right, #1b3a8a, #32439f);\n  border-radius: 10px;\n  z-index: 1000;\n  overflow: hidden;\n  transition: 0.1s;\n  margin: 20px;\n}\n\n@media (max-width: 1199px) {\n  .dialog__main[_ngcontent-%COMP%]   .dialog__parent[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n@media (max-width: 1170px) {\n  .dialog__main[_ngcontent-%COMP%]   .dialog__parent[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n}\n\n@media (max-width: 761px) {\n  .dialog__main[_ngcontent-%COMP%]   .dialog__parent[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n@media (max-width: 575px) {\n  .dialog__main[_ngcontent-%COMP%]   .dialog__parent[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%] {\n    padding: 35px 20px;\n    width: 100%;\n    height: 100%;\n    transform: translate(0, 0);\n    top: 0;\n    left: 0;\n    border-radius: 0;\n    overflow-y: auto;\n  }\n}\n\n.dialog__main[_ngcontent-%COMP%]   .dialog__parent[_ngcontent-%COMP%]   .dialog.dialog-top[_ngcontent-%COMP%] {\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n\n.dialog__main[_ngcontent-%COMP%]   .dialog__parent[_ngcontent-%COMP%]   .dialog.dialog-center[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n@media (max-width: 991px) {\n  .dialog__main[_ngcontent-%COMP%]   .dialog__parent[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%] {\n    position: absolute;\n    min-width: 520px;\n    left: 50%;\n    right: auto;\n  }\n}\n\n@media (max-width: 575px) {\n  .dialog__main[_ngcontent-%COMP%]   .dialog__parent[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%] {\n    min-width: 100%;\n    width: 100%;\n    left: 0;\n    transform: translate(0, 0);\n  }\n}\n\n.dialog__main[_ngcontent-%COMP%]   .dialog__parent[_ngcontent-%COMP%]   .dialog__close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 17px;\n  height: 17px;\n  border: 0;\n  background-color: transparent;\n}\n\n.dialog__main[_ngcontent-%COMP%]   .dialog__parent[_ngcontent-%COMP%]   .dialog__close-btn[_ngcontent-%COMP%]:before {\n  font-family: \"untitled-font-1\";\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: absolute;\n  content: \"u\";\n  top: -24px;\n  left: -29px;\n  width: 100%;\n  height: 100%;\n  font-size: 75px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5jb21wb25lbnQuc2NzcyIsIi4uLy4uL2Fzc2V0cy9zdHlsZXMvYmFzZS9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBQ0o7O0FBQ0k7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUNSOztBQUNRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdURBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNaOztBQ3lCSTtFRHRDSTtJQWNRLFNBQUE7RUFHZDtBQUNGOztBQzBCSTtFRDVDSTtJQWlCUSxjQUFBO0VBS2Q7QUFDRjs7QUNpQ0k7RUR4REk7SUFvQlEsU0FBQTtFQU9kO0FBQ0Y7O0FDa0NJO0VEOURJO0lBdUJRLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQVNkO0FBQ0Y7O0FBUlk7RUFDSSxNQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0FBVWhCOztBQVJZO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQVVoQjs7QUNBSTtFRGxESTtJQTJDUSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUFXZDtBQUNGOztBQ0lJO0VEOURJO0lBa0RRLGVBQUE7SUFDQSxXQUFBO0lBQ0EsT0FBQTtJQUNBLDBCQUFBO0VBWWQ7QUFDRjs7QUFUUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtBQVdaOztBQVZZO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVloQiIsImZpbGUiOiJkaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzL2Jhc2UvbWl4aW5zJztcbjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogOTk5O1xufVxuLmRpYWxvZ19fbWFpbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgIC5kaWFsb2dfX3BhcmVudCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgei1pbmRleDogMTtcblxuICAgICAgICAuZGlhbG9nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDUyMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMzVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFiM2E4YSwgIzMyNDM5Zik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgQGluY2x1ZGUgbWF4MTE5OSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGluY2x1ZGUgbWF4MTE3MCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAaW5jbHVkZSBtYXg3NjEge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBpbmNsdWRlIG1heDU3NSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzVweCAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmRpYWxvZy10b3Age1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmRpYWxvZy1jZW50ZXIge1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBpbmNsdWRlIG1heDk5MSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTIwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAaW5jbHVkZSBtYXg1NzUge1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRpYWxvZ19fY2xvc2UtYnRuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3VudGl0bGVkLWZvbnQtMSc7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ3UnO1xuICAgICAgICAgICAgICAgIHRvcDogLTI0cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTI5cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBtaXhpbiB0ZXh0LXRydW5jYXRlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5AbWl4aW4gdGV4dFdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIGxpbmUtYnJlYWs6IHN0cmljdDtcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgaHlwaGVuczogYXV0bztcbn1cbkBtaXhpbiBjb3ZlckJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbkBtaXhpbiBhYnMoJHRvcDogYXV0bywgJHJpZ2h0OiBhdXRvLCAkYm90dG9tOiBhdXRvLCAkbGVmdDogYXV0bykge1xuICAgIHRvcDogJHRvcDtcbiAgICByaWdodDogJHJpZ2h0O1xuICAgIGJvdHRvbTogJGJvdHRvbTtcbiAgICBsZWZ0OiAkbGVmdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5AbWl4aW4gY292ZXJJbWcge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xufVxuQG1peGluIHZhbGluZ0JveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbkBtaXhpbiB1blNlbGVjdCB7XG4gICAgLXdlYmtpdC10b3VjaC1jb2xsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuQG1peGluIGNsZWFyZml4IHtcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG59XG5AbWl4aW4gbWF4MTE5OSB7XG4gICAgLy8gbWFrZXQgMTE3MVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1heDExNzAge1xuICAgIC8vIG1ha2V0cyA5OTJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE3MHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtYXg5OTEge1xuICAgIC8vIG1ha2V0cyA3NjJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1heDc2MSB7XG4gICAgLy8gbWFrZXRzIDU3NlxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbWF4NTc1IHtcbiAgICAvLyBtYWtldHMgNDAwXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtb2JpbGUge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzOTlweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gdHJpYW5nbGVVcCgkdzogMjBweCwgJGg6IDIwcHgsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlcjogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogJGggc29saWQgJGNvbG9yO1xufVxuQG1peGluIHRyaWFuZ2xlRG93bigkdzogMjBweCwgJGg6IDIwcHgsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3A6ICRoIHNvbGlkICRjb2xvcjtcbn1cbkBtaXhpbiB0cmlhbmdsZUxlZnQoJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6ICRoIHNvbGlkICRjb2xvcjtcbn1cbkBtaXhpbiB0cmlhbmdsZVJpZ2h0KCR3OiAyMHB4LCAkaDogMjBweCwgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6ICRoIHNvbGlkICRjb2xvcjtcbn1cbkBtaXhpbiB0cmlhbmdsZVRvcExlZnQoJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAkdyBzb2xpZCAkY29sb3I7XG4gICAgYm9yZGVyLXJpZ2h0OiAkaCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbkBtaXhpbiBwYXJhbGxlbG9ncmFtKCR3OiAxNTBweCwgJGg6IDEwMHB4LCAkc2tldzogMjBkZWcsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6ICR3O1xuICAgIGhlaWdodDogJGg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoJHNrZXcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBza2V3KCRza2V3KTtcbiAgICAtby10cmFuc2Zvcm06IHNrZXcoJHNrZXcpO1xuICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgICA+IHNwYW4sXG4gICAgYSxcbiAgICBhZGRyZXNzIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLSRza2V3KTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNrZXcoLSRza2V3KTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiBza2V3KC0kc2tldyk7XG4gICAgfVxufVxuQG1peGluIGJvdHRvbUxpbmUoJGg6IDhweCwgJGNvbG9yOiAjMDBiOWJmKSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6ICRoO1xufVxuQG1peGluIGNlbnRlci1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuQG1peGluIGljb0NlbnRlciB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuQG1peGluIHBzZXVkbygkZGlzcGxheTogYmxvY2ssICRwb3M6IGFic29sdXRlLCAkY29udGVudDogJycpIHtcbiAgICBjb250ZW50OiAkY29udGVudDtcbiAgICBkaXNwbGF5OiAkZGlzcGxheTtcbiAgICBwb3NpdGlvbjogJHBvcztcbn1cbkBtaXhpbiBiYXJ0YmxvY2sge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMjM0ZWUyLCAwLjEpO1xufVxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('dialog', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: '0' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(100)])
            ])
        ] } });


/***/ }),

/***/ 5876:
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService),
/* harmony export */   "MobileNavState": () => (/* binding */ MobileNavState),
/* harmony export */   "ResolveAltBlock": () => (/* binding */ ResolveAltBlock),
/* harmony export */   "ServiceResolver": () => (/* binding */ ServiceResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1954);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1339);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9230);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);







class HttpService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.serverApi = '';
        this.Info = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.serverApi = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backend;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.defer)(() => {
            return this.httpClient
                .get(`${this.serverApi}/get_info`)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
                this.infoObj = response;
                return this.infoObj;
            }));
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(6000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.repeat)())
            .subscribe({
            next: (response) => {
                this.infoObj = response;
                this.Info.next(response);
                if (this.router.url === '/server-error') {
                    this.router.navigate(['/']);
                }
            },
            error: (err) => {
                console.log('error', err);
                this.router.navigate(['/server-error']);
            }
        });
    }
    subscribeInfo() {
        return this.Info.asObservable();
    }
    getInfo() {
        if (this.infoObj === undefined) {
            const URL = `${this.serverApi}/get_info`;
            return this.httpClient.get(URL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
                this.infoObj = response;
                return this.infoObj;
            }));
        }
        else {
            return this.infoObj;
        }
    }
    // BlockChain Page
    getBlockDetails(start, limit) {
        const URL = `${this.serverApi}/get_blocks_details/${start}/${limit}`;
        return this.httpClient.get(URL);
    }
    getMainBlockDetails(id) {
        const URL = `${this.serverApi}/get_main_block_details/${id}`;
        return this.httpClient.get(URL);
    }
    getTxPoolDetails(limit) {
        const URL = `${this.serverApi}/get_tx_pool_details/${limit}`;
        return this.httpClient.get(URL);
    }
    // Alt-blocks Page
    getAltBlocks(offset, count) {
        const URL = `${this.serverApi}/get_alt_blocks_details/${offset}/${count}`;
        return this.httpClient.get(URL);
    }
    getAltDetailBlock(id) {
        const URL = `${this.serverApi}/get_alt_block_details/${id}`;
        return this.httpClient.get(URL);
    }
    // Transaction Page
    getTransaction(tx_hash) {
        const URL = `${this.serverApi}/get_tx_details/${tx_hash}`;
        return this.httpClient.get(URL);
    }
    getConnectTransaction(amount, i) {
        const URL = `${this.serverApi}/get_out_info/${amount}/${i}`;
        return this.httpClient.get(URL);
    }
    // Aliases Page
    getAliases(offset, count, search) {
        if (!search) {
            search = 'all';
        }
        const URL = `${this.serverApi}/get_aliases/${offset}/${count}/${search}`;
        return this.httpClient.get(URL);
    }
    searchById(search) {
        const URL = `${this.serverApi}/search_by_id/${search}`;
        return this.httpClient.get(URL);
    }
    getChart(chart, period) {
        const URL = `${this.serverApi}/get_chart/${chart}/${period}`;
        console.log(URL);
        return this.httpClient.get(URL);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
HttpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac });
// MainInfo resolve
class ServiceResolver {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        return this.service.getInfo();
    }
}
ServiceResolver.ɵfac = function ServiceResolver_Factory(t) { return new (t || ServiceResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](HttpService)); };
ServiceResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: ServiceResolver, factory: ServiceResolver.ɵfac });
// AltBlock resolve
class ResolveAltBlock {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        const id = route.params['id'];
        return this.service.getAltDetailBlock(id);
    }
}
ResolveAltBlock.ɵfac = function ResolveAltBlock_Factory(t) { return new (t || ResolveAltBlock)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](HttpService)); };
ResolveAltBlock.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: ResolveAltBlock, factory: ResolveAltBlock.ɵfac });
class MobileNavState {
    constructor() {
        this.navIsOpen = true;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    }
    toggleMenu() {
        this.navIsOpen = this.navIsOpen !== true;
        this.change.emit(this.navIsOpen);
    }
}
MobileNavState.ɵfac = function MobileNavState_Factory(t) { return new (t || MobileNavState)(); };
MobileNavState.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({ type: MobileNavState, selectors: [["", "foo", ""]], outputs: { change: "change" } });
MobileNavState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: MobileNavState, factory: MobileNavState.ɵfac });


/***/ }),

/***/ 4275:
/*!**************************************************!*\
  !*** ./src/app/main-info/main-info.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainInfoComponent": () => (/* binding */ MainInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/subscription-tracker/subscription-tracker */ 8083);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ 5876);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var app_pipes_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pipes.pipe */ 2701);






class MainInfoComponent extends app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__.SubscriptionTracker {
    constructor(httpService, route) {
        super();
        this.httpService = httpService;
        this.route = route;
        this.letGetInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    getInfoPrepare(data) {
        this.info = data;
        if (this.info) {
            this.height = this.info.height;
            this.posDifficulty = this.info.pos_difficulty;
            this.powDifficulty = this.info.pow_difficulty;
            this.totalCoins = this.info.total_coins;
            this.txCount = this.info.tx_count;
            this.NetworkHashrate = this.info.current_network_hashrate_350;
        }
    }
    ngOnInit() {
        this.getInfoPrepare(this.route.snapshot.data['MainInfo']);
        this._track(this.httpService.subscribeInfo().subscribe({
            next: (data) => {
                this.getInfoPrepare(data);
            },
            error: (err) => {
                console.log(err);
            },
            complete: () => {
                this.letGetInfo.emit(this.info);
            }
        }));
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
MainInfoComponent.ɵfac = function MainInfoComponent_Factory(t) { return new (t || MainInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
MainInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MainInfoComponent, selectors: [["app-main-info"]], outputs: { letGetInfo: "letGetInfo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 40, vars: 21, consts: [[1, "main_info"], [1, "height"], [1, "title"], [1, "value"], [1, "difficulty"], [1, "pos"], [1, "pow"], [1, "coins_emitted"], [1, "transactions"], [1, "hash_rate"]], template: function MainInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4)(8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Difficulty");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 3)(11, "div", 5)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "PoS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 6)(17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "PoW:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 7)(22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Coins Emitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "moneyParse");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 8)(29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 9)(35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Hash Rate (aprox):");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "hashPowerConverter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, ctx.height));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 8, ctx.posDifficulty));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 10, ctx.powDifficulty));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 14, ctx.totalCoins)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 16, ctx.txCount + ctx.height));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](39, 18, ctx.NetworkHashrate, "speed"));
    } }, pipes: [app_pipes_pipe__WEBPACK_IMPORTED_MODULE_2__.BitNumberPipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_2__.MoneyParsePipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_2__.HashPowerConverterPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2 });


/***/ }),

/***/ 2701:
/*!*******************************!*\
  !*** ./src/app/pipes.pipe.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BitNumberPipe": () => (/* binding */ BitNumberPipe),
/* harmony export */   "DateFormatPipe": () => (/* binding */ DateFormatPipe),
/* harmony export */   "HashPowerConverterPipe": () => (/* binding */ HashPowerConverterPipe),
/* harmony export */   "MoneyParsePipe": () => (/* binding */ MoneyParsePipe),
/* harmony export */   "OrderByPipe": () => (/* binding */ OrderByPipe),
/* harmony export */   "OrderPipe": () => (/* binding */ OrderPipe),
/* harmony export */   "SortByAlphabetPipe": () => (/* binding */ SortByAlphabetPipe),
/* harmony export */   "SortGridPipe": () => (/* binding */ SortGridPipe),
/* harmony export */   "TimeAgoPipe": () => (/* binding */ TimeAgoPipe),
/* harmony export */   "TimeAgoPipe2": () => (/* binding */ TimeAgoPipe2),
/* harmony export */   "TruncatePipe": () => (/* binding */ TruncatePipe),
/* harmony export */   "UtcPipe": () => (/* binding */ UtcPipe)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


// array reverse
class OrderByPipe {
    transform(array, field) {
        if (!array) {
            return array;
        }
        array.reverse();
        return array;
    }
}
OrderByPipe.ɵfac = function OrderByPipe_Factory(t) { return new (t || OrderByPipe)(); };
OrderByPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "orderBy", type: OrderByPipe, pure: false });
// sort
class SortGridPipe {
    transform(array, args) {
        if (typeof args[0] === 'undefined') {
            return array;
        }
        const direction = args[0][0];
        const column = args.replace('-', '');
        array.sort((a, b) => {
            const left = Number(new Date(a[column]));
            const right = Number(new Date(b[column]));
            return direction === '-' ? right - left : left - right;
        });
        return array;
    }
}
SortGridPipe.ɵfac = function SortGridPipe_Factory(t) { return new (t || SortGridPipe)(); };
SortGridPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "sortgrid", type: SortGridPipe, pure: false });
class SortByAlphabetPipe {
    transform(array, field) {
        array.sort((a, b) => {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    }
}
SortByAlphabetPipe.ɵfac = function SortByAlphabetPipe_Factory(t) { return new (t || SortByAlphabetPipe)(); };
SortByAlphabetPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "sortByAlphabet", type: SortByAlphabetPipe, pure: true });
// bit number format
class BitNumberPipe {
    transform(value) {
        if (isNaN(value)) {
            return String(value);
        }
        if (value === null) {
            return value;
        }
        const string = value.toString();
        const arr = string.split('.');
        arr[0] = arr[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
        return arr.join(',');
    }
}
BitNumberPipe.ɵfac = function BitNumberPipe_Factory(t) { return new (t || BitNumberPipe)(); };
BitNumberPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "bitNumber", type: BitNumberPipe, pure: false });
// money number format
class MoneyParsePipe {
    transform(value, args) {
        if (!!value) {
            let maxFraction = 12;
            if (args) {
                maxFraction = parseInt(args, 10);
            }
            const power = Math.pow(10, maxFraction);
            let str = (BigInt(value) / BigInt(power)).toString();
            for (let i = str.length - 1; i >= 0; i--) {
                if (str[i] !== '0') {
                    str = str.substr(0, i + 1);
                    break;
                }
            }
            if (str[str.length - 1] === '.') {
                str = str.substr(0, str.length - 1);
            }
            return str;
        }
        return '0';
    }
}
MoneyParsePipe.ɵfac = function MoneyParsePipe_Factory(t) { return new (t || MoneyParsePipe)(); };
MoneyParsePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "moneyParse", type: MoneyParsePipe, pure: false });
class TruncatePipe {
    transform(value, limit) {
        if (value) {
            return value.slice(0, limit);
        }
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "limitTo", type: TruncatePipe, pure: true });
// Long Time Ago
class TimeAgoPipe {
    transform(value) {
        const now = moment__WEBPACK_IMPORTED_MODULE_0__(value);
        let utcMoment = moment__WEBPACK_IMPORTED_MODULE_0__.utc();
        let date = new Date(utcMoment.format());
        // let date = moment.utc().valueOf();
        // let date = new Date();
        const exp = moment__WEBPACK_IMPORTED_MODULE_0__(date);
        const diffDuration = moment__WEBPACK_IMPORTED_MODULE_0__.duration(exp.diff(now));
        if (diffDuration.days() === 0 &&
            diffDuration.hours() === 0 &&
            diffDuration.minutes() === 0) {
            this.result = 'a few seconds';
        }
        else if (diffDuration.days() === 0 && diffDuration.hours() === 0) {
            this.result = diffDuration.minutes() + 'm ';
        }
        else if (diffDuration.days() === 0) {
            this.result =
                diffDuration.hours() + 'h ' + diffDuration.minutes() + 'm ';
        }
        else {
            this.result =
                diffDuration.days() +
                    'd ' +
                    diffDuration.hours() +
                    'h ' +
                    diffDuration.minutes() +
                    'm ';
        }
        return this.result;
    }
}
TimeAgoPipe.ɵfac = function TimeAgoPipe_Factory(t) { return new (t || TimeAgoPipe)(); };
TimeAgoPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "TimeAgo", type: TimeAgoPipe, pure: false });
class OrderPipe {
    static _OrderPipeComparator(a, b) {
        if (isNaN(parseFloat(a)) ||
            !isFinite(a) ||
            isNaN(parseFloat(b)) ||
            !isFinite(b)) {
            // Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            }
            if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
            }
        }
        else {
            // Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b)) {
                return -1;
            }
            if (parseFloat(a) > parseFloat(b)) {
                return 1;
            }
        }
        return 0;
    }
    transform(input, [config = '+']) {
        if (!Array.isArray(input)) {
            return input;
        }
        if (!Array.isArray(config) ||
            (Array.isArray(config) && config.length === 1)) {
            const propertyToCheck = !Array.isArray(config)
                ? config
                : config[0];
            const desc = propertyToCheck.substr(0, 1) === '-';
            if (!propertyToCheck ||
                propertyToCheck === '-' ||
                propertyToCheck === '+') {
                return !desc ? input.sort() : input.sort().reverse();
            }
            else {
                const property = propertyToCheck.substr(0, 1) === '+' ||
                    propertyToCheck.substr(0, 1) === '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return input.sort(function (a, b) {
                    return !desc
                        ? OrderPipe._OrderPipeComparator(a[property], b[property])
                        : -OrderPipe._OrderPipeComparator(a[property], b[property]);
                });
            }
        }
        else {
            return input.sort(function (a, b) {
                for (let i = 0; i < config.length; i++) {
                    const desc = config[i].substr(0, 1) === '-';
                    const property = config[i].substr(0, 1) === '+' ||
                        config[i].substr(0, 1) === '-'
                        ? config[i].substr(1)
                        : config[i];
                    const comparison = !desc
                        ? OrderPipe._OrderPipeComparator(a[property], b[property])
                        : -OrderPipe._OrderPipeComparator(a[property], b[property]);
                    if (comparison !== 0) {
                        return comparison;
                    }
                }
                return 0;
            });
        }
    }
}
OrderPipe.ɵfac = function OrderPipe_Factory(t) { return new (t || OrderPipe)(); };
OrderPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "Order", type: OrderPipe, pure: false });
class HashPowerConverterPipe {
    transform(value, args) {
        const PT = 1000000000000000; // PetaHash
        const TH = 1000000000000; // TeraHash
        const GH = 1000000000; // GigaHash
        const MH = 1000000; // MegaHash
        const KH = 1000; // KiloHash
        if (value && !isNaN(value)) {
            if (value >= PT) {
                return ((value / PT).toFixed(3) +
                    ' ' +
                    (args === 'speed' ? 'PT/sec' : 'P'));
            }
            else if (value >= TH) {
                return ((value / TH).toFixed(3) +
                    ' ' +
                    (args === 'speed' ? 'TH/sec' : 'T'));
            }
            else if (value >= GH) {
                return ((value / GH).toFixed(3) +
                    ' ' +
                    (args === 'speed' ? 'GH/sec' : 'G'));
            }
            else if (value >= MH) {
                return ((value / MH).toFixed(3) +
                    ' ' +
                    (args === 'speed' ? 'MH/sec' : 'M'));
            }
            else if (value >= KH) {
                return ((value / KH).toFixed(3) +
                    ' ' +
                    (args === 'speed' ? 'KH/sec' : 'K'));
            }
            else {
                return value + ' ' + (args === 'speed' ? 'H/sec' : 'H');
            }
        }
        else if (value === 0) {
            return value + ' ' + (args === 'speed' ? 'H/sec' : 'H');
        }
    }
}
HashPowerConverterPipe.ɵfac = function HashPowerConverterPipe_Factory(t) { return new (t || HashPowerConverterPipe)(); };
HashPowerConverterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "hashPowerConverter", type: HashPowerConverterPipe, pure: true });
class DateFormatPipe {
    transform(value, ...args) {
        if (!value) {
            return '';
        }
        return moment__WEBPACK_IMPORTED_MODULE_0__(value).format(args[0]);
    }
}
DateFormatPipe.ɵfac = function DateFormatPipe_Factory(t) { return new (t || DateFormatPipe)(); };
DateFormatPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "amDateFormat", type: DateFormatPipe, pure: true });
class UtcPipe {
    transform(value) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(value).utc();
    }
}
UtcPipe.ɵfac = function UtcPipe_Factory(t) { return new (t || UtcPipe)(); };
UtcPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "amUtc", type: UtcPipe, pure: true });
class TimeAgoPipe2 {
    constructor(cdRef, ngZone) {
        this.cdRef = cdRef;
        this.ngZone = ngZone;
    }
    format(m) {
        return m.from(moment__WEBPACK_IMPORTED_MODULE_0__(), this.lastOmitSuffix);
    }
    transform(value, omitSuffix, formatFn) {
        if (this.hasChanged(value, omitSuffix)) {
            this.lastTime = this.getTime(value);
            this.lastValue = value;
            this.lastOmitSuffix = omitSuffix;
            this.lastLocale = this.getLocale(value);
            this.formatFn = formatFn || this.format.bind(this);
            this.removeTimer();
            this.createTimer();
            this.lastText = this.formatFn(moment__WEBPACK_IMPORTED_MODULE_0__(value));
        }
        else {
            this.createTimer();
        }
        return this.lastText;
    }
    ngOnDestroy() {
        this.removeTimer();
    }
    createTimer() {
        if (this.currentTimer) {
            return;
        }
        const momentInstance = moment__WEBPACK_IMPORTED_MODULE_0__(this.lastValue);
        const timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;
        this.currentTimer = this.ngZone.runOutsideAngular(() => {
            if (typeof window !== 'undefined') {
                return window.setTimeout(() => {
                    this.lastText = this.formatFn(moment__WEBPACK_IMPORTED_MODULE_0__(this.lastValue));
                    this.currentTimer = null;
                    this.ngZone.run(() => this.cdRef.markForCheck());
                }, timeToUpdate);
            }
            else {
                return null;
            }
        });
    }
    removeTimer() {
        if (this.currentTimer) {
            window.clearTimeout(this.currentTimer);
            this.currentTimer = null;
        }
    }
    getSecondsUntilUpdate(momentInstance) {
        const howOld = Math.abs(moment__WEBPACK_IMPORTED_MODULE_0__().diff(momentInstance, 'minute'));
        if (howOld < 1) {
            return 1;
        }
        else if (howOld < 60) {
            return 30;
        }
        else if (howOld < 180) {
            return 300;
        }
        else {
            return 3600;
        }
    }
    hasChanged(value, omitSuffix) {
        return (this.getTime(value) !== this.lastTime ||
            this.getLocale(value) !== this.lastLocale ||
            omitSuffix !== this.lastOmitSuffix);
    }
    getTime(value) {
        if (moment__WEBPACK_IMPORTED_MODULE_0__.isDate(value)) {
            return value.getTime();
        }
        else if (moment__WEBPACK_IMPORTED_MODULE_0__.isMoment(value)) {
            return value.valueOf();
        }
        else {
            return moment__WEBPACK_IMPORTED_MODULE_0__(value).valueOf();
        }
    }
    getLocale(value) {
        return moment__WEBPACK_IMPORTED_MODULE_0__.isMoment(value) ? value.locale() : moment__WEBPACK_IMPORTED_MODULE_0__.locale();
    }
}
TimeAgoPipe2.ɵfac = function TimeAgoPipe2_Factory(t) { return new (t || TimeAgoPipe2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone, 16)); };
TimeAgoPipe2.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "amTimeAgo", type: TimeAgoPipe2, pure: false });


/***/ }),

/***/ 5503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pipes.pipe */ 2701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class PipesModule {
}
PipesModule.ɵfac = function PipesModule_Factory(t) { return new (t || PipesModule)(); };
PipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.OrderPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.OrderByPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.SortGridPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.BitNumberPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.MoneyParsePipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.TruncatePipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.TimeAgoPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.SortByAlphabetPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.HashPowerConverterPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.DateFormatPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.UtcPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.TimeAgoPipe2], exports: [app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.OrderPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.OrderByPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.SortGridPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.BitNumberPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.MoneyParsePipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.TruncatePipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.TimeAgoPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.SortByAlphabetPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.HashPowerConverterPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.DateFormatPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.UtcPipe,
        app_pipes_pipe__WEBPACK_IMPORTED_MODULE_0__.TimeAgoPipe2] }); })();


/***/ }),

/***/ 6392:
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/subscription-tracker/subscription-tracker */ 8083);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ 5876);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);








function SearchComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No matching records found!\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { show: a0 }; };
class SearchComponent extends app_subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__.SubscriptionTracker {
    constructor(httpService, router, route, ngZone) {
        super();
        this.httpService = httpService;
        this.router = router;
        this.route = route;
        this.ngZone = ngZone;
        this.searchId = {};
        this.loading = true;
        this.isVisible = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.searchNotFound = false;
        this.isVisibleInput = false;
    }
    searchFunc() {
        this.isVisibleInput = !this.isVisibleInput;
        this.isVisible.emit(this.isVisibleInput);
        this.setSearch = this.setSearch.replace(/\s/g, '');
        if (this.setSearch) {
            this.httpService
                .searchById(this.setSearch)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))
                .subscribe({
                next: (data) => {
                    this.searchId = data;
                    if (this.setSearch >= 1 && this.setSearch <= 9999999) {
                        this.httpService
                            .getBlockDetails(this.setSearch, 1)
                            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))
                            .subscribe({
                            next: (result) => {
                                this.resultBlockSearch = result;
                            },
                            error: (err) => console.error(err),
                            complete: () => {
                                if (this.resultBlockSearch.length) {
                                    this.router.navigate([
                                        '/block',
                                        this.resultBlockSearch[0].id
                                    ], { relativeTo: this.route });
                                }
                                else if (!this.resultBlockSearch.length) {
                                    this.searchNotFound = true;
                                    this.ngZone.runOutsideAngular(() => {
                                        setTimeout(() => {
                                            this.ngZone.run(() => {
                                                this.searchNotFound =
                                                    false;
                                            });
                                        }, 2000);
                                    });
                                }
                            }
                        });
                    }
                    else {
                        if (this.searchId.result) {
                            if (this.searchId.result === 'tx') {
                                this.router.navigate(['/transaction', this.setSearch], {
                                    relativeTo: this.route
                                });
                            }
                            else if (this.searchId.result === 'block') {
                                this.router.navigate(['/block', this.setSearch], {
                                    relativeTo: this.route
                                });
                            }
                            else if (this.searchId.result === 'alt_block') {
                                this.router.navigate(['/alt-blocks', this.setSearch], {
                                    relativeTo: this.route
                                });
                            }
                            else if (this.searchId.result === 'alias') {
                                this.router.navigate(['/aliases', this.setSearch], {
                                    relativeTo: this.route
                                });
                            }
                            else {
                                this.searchNotFound = true;
                                this.ngZone.runOutsideAngular(() => {
                                    setTimeout(() => {
                                        this.ngZone.run(() => {
                                            this.searchNotFound = false;
                                        });
                                    }, 2000);
                                });
                            }
                        }
                        else {
                            this.searchNotFound = true;
                            this.ngZone.runOutsideAngular(() => {
                                setTimeout(() => {
                                    this.ngZone.run(() => {
                                        this.searchNotFound = false;
                                    });
                                }, 2000);
                            });
                        }
                    }
                },
                error: (err) => console.error(err),
                complete: () => { }
            });
        }
    }
    onKeydown(event) {
        if (event.key === 'Enter') {
            this.searchFunc();
            localStorage.setItem('inputSearch', this.setSearch);
        }
        // Control+Backspace
        if (event.ctrlKey && event.which === 8) {
            localStorage.removeItem('inputSearch');
        }
        if (event.key === 'Backspace') {
            if (this.setSearch.length <= 1) {
                localStorage.removeItem('inputSearch');
            }
        }
    }
    ngOnInit() {
        if (localStorage.getItem('inputSearch') !== null) {
            this.setSearch = localStorage.getItem('inputSearch');
        }
        this.loading = false;
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone)); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], inputs: { letGetInfo: "letGetInfo" }, outputs: { isVisible: "isVisible" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 5, consts: [["type", "text", "placeholder", "block height / block hash / transaction hash", 3, "ngClass", "ngModel", "ngModelChange", "keydown", "keypress", "keyup"], [1, "run_search", 3, "click"], ["class", "search_not_found", 4, "ngIf"], [1, "search_not_found"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_0_listener($event) { return ctx.setSearch = $event; })("keydown", function SearchComponent_Template_input_keydown_0_listener($event) { return ctx.onKeydown($event); })("keypress", function SearchComponent_Template_input_keypress_0_listener($event) { return ctx.onKeydown($event); })("keyup", function SearchComponent_Template_input_keyup_0_listener($event) { return ctx.onKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_1_listener() { return ctx.searchFunc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchComponent_span_2_Template, 2, 0, "span", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx.isVisibleInput === true))("ngModel", ctx.setSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchNotFound === true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  position: relative;\n  background-color: rgba(35, 78, 226, 0.1);\n  border-radius: 10px;\n  height: 33px;\n  padding-right: 15px;\n}\n[_nghost-%COMP%]::-webkit-input-placeholder {\n  color: #9eaacc;\n}\n[_nghost-%COMP%]::-moz-placeholder {\n  color: #9eaacc;\n  opacity: 1;\n}\n[_nghost-%COMP%]::-ms-input-placeholder {\n  color: #9eaacc;\n}\n@media (max-width: 761px) {\n  [_nghost-%COMP%] {\n    padding-left: 15px;\n  }\n}\n@media (max-width: 575px) {\n  [_nghost-%COMP%] {\n    height: 32px;\n    max-width: 100%;\n  }\n}\n[_nghost-%COMP%]    > input[_ngcontent-%COMP%], [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n}\n[_nghost-%COMP%]    > input[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 100%;\n  color: #9eaacc;\n  transition: 0.2s;\n  font-size: 14px;\n  margin-right: 15px;\n  padding-left: 15px;\n}\n[_nghost-%COMP%]    > input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #9eaacc;\n}\n[_nghost-%COMP%]    > input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #9eaacc;\n  opacity: 1;\n}\n[_nghost-%COMP%]    > input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #9eaacc;\n}\n@media (max-width: 575px) {\n  [_nghost-%COMP%]    > input[_ngcontent-%COMP%] {\n    opacity: 0;\n    width: 0;\n    font-size: 16px;\n    display: none;\n  }\n  [_nghost-%COMP%]    > input.show[_ngcontent-%COMP%] {\n    display: flex;\n    width: 285px;\n    opacity: 1;\n    margin-right: 15px;\n  }\n}\n[_nghost-%COMP%]   .search_not_found[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 90%;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  padding: 5px 15px;\n  padding-left: 10px;\n  color: #ff5252;\n}\n@media (max-width: 575px) {\n  [_nghost-%COMP%]   .search_not_found[_ngcontent-%COMP%] {\n    bottom: auto;\n    font-size: 13px;\n    left: auto;\n    right: 40px;\n    width: 200px;\n    height: 100%;\n  }\n}\n@media (max-width: 399px) {\n  [_nghost-%COMP%]   .search_not_found[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyIsIi4uLy4uL2Fzc2V0cy9zdHlsZXMvYmFzZS9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQVdBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBVko7QUFGSTtFQUNJLGNBQUE7QUFJUjtBQUZJO0VBQ0ksY0FBQTtFQUNBLFVBQUE7QUFJUjtBQUZJO0VBQ0ksY0FBQTtBQUlSO0FDNERJO0VENUVKO0lBa0JRLGtCQUFBO0VBRU47QUFDRjtBQzZESTtFRGxGSjtJQXFCUSxZQUFBO0lBQ0EsZUFBQTtFQUlOO0FBQ0Y7QUFISTs7RUFFSSxZQUFBO0VBQ0EsNkJBQUE7QUFLUjtBQUhJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUtSO0FBSlE7RUFDSSxjQUFBO0FBTVo7QUFKUTtFQUNJLGNBQUE7RUFDQSxVQUFBO0FBTVo7QUFKUTtFQUNJLGNBQUE7QUFNWjtBQytCSTtFRHJEQTtJQW9CUSxVQUFBO0lBQ0EsUUFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0VBTVY7RUFMVTtJQUNJLGFBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0VBT2Q7QUFDRjtBQUhJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBS1I7QUNLSTtFRHBCQTtJQVlRLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQU9WO0FBQ0Y7QUNBSTtFRHpCQTtJQW9CUSxZQUFBO0VBU1Y7QUFDRiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzL2Jhc2UvbWl4aW5zJztcbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMyMzRlZTIsIDAuMSk7XG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjOWVhYWNjO1xuICAgIH1cbiAgICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICM5ZWFhY2M7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgICY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjOWVhYWNjO1xuICAgIH1cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMzNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICB9XG4gICAgQGluY2x1ZGUgbWF4NTc1IHtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgID4gaW5wdXQsXG4gICAgYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgPiBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBjb2xvcjogIzllYWFjYztcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogIzllYWFjYztcbiAgICAgICAgfVxuICAgICAgICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOWVhYWNjO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6ICM5ZWFhY2M7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBtYXg1NzUge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICYuc2hvdyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjg1cHg7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VhcmNoX25vdF9mb3VuZCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiA5MCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjZmY1MjUyO1xuICAgICAgICBAaW5jbHVkZSBtYXg1NzUge1xuICAgICAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAbWl4aW4gdGV4dC10cnVuY2F0ZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1peGluIHRleHRXcmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBsaW5lLWJyZWFrOiBzdHJpY3Q7XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG59XG5AbWl4aW4gY292ZXJCb3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5AbWl4aW4gYWJzKCR0b3A6IGF1dG8sICRyaWdodDogYXV0bywgJGJvdHRvbTogYXV0bywgJGxlZnQ6IGF1dG8pIHtcbiAgICB0b3A6ICR0b3A7XG4gICAgcmlnaHQ6ICRyaWdodDtcbiAgICBib3R0b206ICRib3R0b207XG4gICAgbGVmdDogJGxlZnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuQG1peGluIGNvdmVySW1nIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cbkBtaXhpbiB2YWxpbmdCb3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5AbWl4aW4gdW5TZWxlY3Qge1xuICAgIC13ZWJraXQtdG91Y2gtY29sbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbkBtaXhpbiBjbGVhcmZpeCB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuQG1peGluIG1heDExOTkge1xuICAgIC8vIG1ha2V0IDExNzFcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtYXgxMTcwIHtcbiAgICAvLyBtYWtldHMgOTkyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNzBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbWF4OTkxIHtcbiAgICAvLyBtYWtldHMgNzYyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtYXg3NjEge1xuICAgIC8vIG1ha2V0cyA1NzZcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzYxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1heDU3NSB7XG4gICAgLy8gbWFrZXRzIDQwMFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbW9iaWxlIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIHRyaWFuZ2xlVXAoJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXI6ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206ICRoIHNvbGlkICRjb2xvcjtcbn1cbkBtaXhpbiB0cmlhbmdsZURvd24oJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wOiAkaCBzb2xpZCAkY29sb3I7XG59XG5AbWl4aW4gdHJpYW5nbGVMZWZ0KCR3OiAyMHB4LCAkaDogMjBweCwgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAkaCBzb2xpZCAkY29sb3I7XG59XG5AbWl4aW4gdHJpYW5nbGVSaWdodCgkdzogMjBweCwgJGg6IDIwcHgsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAkaCBzb2xpZCAkY29sb3I7XG59XG5AbWl4aW4gdHJpYW5nbGVUb3BMZWZ0KCR3OiAyMHB4LCAkaDogMjBweCwgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogJHcgc29saWQgJGNvbG9yO1xuICAgIGJvcmRlci1yaWdodDogJGggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5AbWl4aW4gcGFyYWxsZWxvZ3JhbSgkdzogMTUwcHgsICRoOiAxMDBweCwgJHNrZXc6IDIwZGVnLCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAkdztcbiAgICBoZWlnaHQ6ICRoO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KCRza2V3KTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2tldygkc2tldyk7XG4gICAgLW8tdHJhbnNmb3JtOiBza2V3KCRza2V3KTtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4gICAgPiBzcGFuLFxuICAgIGEsXG4gICAgYWRkcmVzcyB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0kc2tldyk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBza2V3KC0kc2tldyk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogc2tldygtJHNrZXcpO1xuICAgIH1cbn1cbkBtaXhpbiBib3R0b21MaW5lKCRoOiA4cHgsICRjb2xvcjogIzAwYjliZikge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAkaDtcbn1cbkBtaXhpbiBjZW50ZXItYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbkBtaXhpbiBpY29DZW50ZXIge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbkBtaXhpbiBwc2V1ZG8oJGRpc3BsYXk6IGJsb2NrLCAkcG9zOiBhYnNvbHV0ZSwgJGNvbnRlbnQ6ICcnKSB7XG4gICAgY29udGVudDogJGNvbnRlbnQ7XG4gICAgZGlzcGxheTogJGRpc3BsYXk7XG4gICAgcG9zaXRpb246ICRwb3M7XG59XG5AbWl4aW4gYmFydGJsb2NrIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzIzNGVlMiwgMC4xKTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 1685:
/*!********************************************************!*\
  !*** ./src/app/server-error/server-error.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerErrorComponent": () => (/* binding */ ServerErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ServerErrorComponent {
    constructor() {
        this.loading = false;
    }
    ngOnInit() {
        this.loading = false;
    }
}
ServerErrorComponent.ɵfac = function ServerErrorComponent_Factory(t) { return new (t || ServerErrorComponent)(); };
ServerErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerErrorComponent, selectors: [["app-server-error"]], decls: 2, vars: 0, consts: [["id", "server-connect-error", 1, "error"]], template: function ServerErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cound't connect to Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#server-connect-error {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 125px;\n  font-size: 17px;\n  font-weight: 300;\n  color: #7190a1;\n  padding-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci1lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNKIiwiZmlsZSI6InNlcnZlci1lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZXJ2ZXItY29ubmVjdC1lcnJvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTI1cHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICM3MTkwYTE7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 8083:
/*!**************************************************************!*\
  !*** ./src/app/subscription-tracker/subscription-tracker.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionTracker": () => (/* binding */ SubscriptionTracker)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SubscriptionTracker {
    constructor() {
        this.subscriptions = [];
    }
    ngOnDestroy() {
        this.subscriptions.forEach((x) => {
            if (x)
                x.unsubscribe();
        });
    }
    _track(...items) {
        this.subscriptions.push(...items);
    }
}
SubscriptionTracker.ɵfac = function SubscriptionTracker_Factory(t) { return new (t || SubscriptionTracker)(); };
SubscriptionTracker.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubscriptionTracker, factory: SubscriptionTracker.ɵfac });


/***/ }),

/***/ 7374:
/*!******************************************************!*\
  !*** ./src/app/transaction/transaction.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionComponent": () => (/* binding */ TransactionComponent)
/* harmony export */ });
/* harmony import */ var _subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../subscription-tracker/subscription-tracker */ 8083);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ 5876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.component */ 6392);
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/dialog.component */ 5029);
/* harmony import */ var app_pipes_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pipes.pipe */ 2701);









const _c0 = function (a1) { return ["/block", a1]; };
const _c1 = function (a0) { return { hide_back_btn: a0 }; };
function TransactionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "app-search", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("isVisible", function TransactionComponent_div_0_Template_app_search_isVisible_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.onIsVisible($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, ctx_r0.blockHash))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c1, ctx_r0.searchIsOpen === true));
} }
function TransactionComponent_div_41_li_51_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const extraItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", extraItem_r15 == null ? null : extraItem_r15.datails_view, " ");
} }
function TransactionComponent_div_41_li_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TransactionComponent_div_41_li_51_span_2_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const extraItem_r15 = ctx.$implicit;
    const $index_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" [", $index_r16 + 1, "] (", extraItem_r15.type, ") ", extraItem_r15.short_view, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", extraItem_r15.datails_view !== (extraItem_r15 == null ? null : extraItem_r15.short_view) && extraItem_r15.datails_view.length);
} }
function TransactionComponent_div_41_li_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TransactionComponent_div_41_li_58_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r19 == null ? null : item_r19.datails_view, " ");
} }
function TransactionComponent_div_41_li_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TransactionComponent_div_41_li_58_span_2_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const $index_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" [ ", $index_r20 + 1, " ] ( ", item_r19.type, " ", item_r19.short_view, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r19.datails_view !== (item_r19 == null ? null : item_r19.short_view) && item_r19.datails_view.length);
} }
function TransactionComponent_div_41_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " From Block ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "unconfirmed transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "table", 44)(6, "thead")(7, "tr")(8, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Hash");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Timestamp (UTC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "tbody")(15, "tr")(16, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
} }
function TransactionComponent_div_41_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "From Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "table", 48)(4, "thead")(5, "tr")(6, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Hash");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Timestamp (UTC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "tbody")(13, "tr")(14, "td", 45)(15, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "bitNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "amUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](11, _c0, ctx_r10.blockHash));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r10.blockHash);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 4, ctx_r10.keeperBlock));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](22, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 9, ctx_r10.blockTimestamp * 1000), "YYYY.MM.DD HH:mm:ss"), " ");
} }
function TransactionComponent_div_41_tr_78_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inConn_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](inConn_r23.kimage_or_ms_id + " (ms-" + inConn_r23.multisig_count + ")");
} }
function TransactionComponent_div_41_tr_78_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inConn_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](inConn_r23.kimage_or_ms_id);
} }
function TransactionComponent_div_41_tr_78_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "coinbase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TransactionComponent_div_41_tr_78_span_10_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransactionComponent_div_41_tr_78_span_10_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r33.showDialogMixinCount = !ctx_r33.showDialogMixinCount; })("click", function TransactionComponent_div_41_tr_78_span_10_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34); const inConn_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r35.getConnectTransaction(inConn_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inConn_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", inConn_r23.global_indexes.length, " ");
} }
function TransactionComponent_div_41_tr_78_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TransactionComponent_div_41_tr_78_span_13_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransactionComponent_div_41_tr_78_span_13_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const inConn_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r38.goToTransaction(inConn_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inConn_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](inConn_r23.global_indexes[0]);
} }
function TransactionComponent_div_41_tr_78_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "untraceable");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TransactionComponent_div_41_tr_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 32)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TransactionComponent_div_41_tr_78_a_6_Template, 2, 1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TransactionComponent_div_41_tr_78_span_7_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TransactionComponent_div_41_tr_78_span_8_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, TransactionComponent_div_41_tr_78_span_10_Template, 2, 1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, TransactionComponent_div_41_tr_78_span_11_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, TransactionComponent_div_41_tr_78_span_13_Template, 2, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, TransactionComponent_div_41_tr_78_span_14_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const inConn_r23 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 8, inConn_r23.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.ImageMultisig === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.ImageMultisig === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.ImageMultisig === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", inConn_r23.global_indexes);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !inConn_r23.global_indexes);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (inConn_r23.global_indexes == null ? null : inConn_r23.global_indexes.length) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (inConn_r23.global_indexes == null ? null : inConn_r23.global_indexes.length) > 1);
} }
function TransactionComponent_div_41_div_80_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56)(1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransactionComponent_div_41_div_80_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r42.inputsLimit = ctx_r42.inputsLimit + 100; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Load more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r12.inputsLimit, " items shown of ", ctx_r12.Inputs == null ? null : ctx_r12.Inputs.length, " total ");
} }
function TransactionComponent_div_41_div_86_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransactionComponent_div_41_div_86_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46); const index_r44 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r45.SetIndexItem(index_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const index_r44 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", index_r44, "", ctx_r13.link, "");
} }
function TransactionComponent_div_41_div_87_tr_15_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", key_r53, " ");
} }
function TransactionComponent_div_41_div_87_tr_15_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "[SPENT]");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TransactionComponent_div_41_div_87_tr_15_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", item_r49.minimum_sigs, ")");
} }
const _c2 = function (a0) { return { "out-selected": a0 }; };
function TransactionComponent_div_41_div_87_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 32)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TransactionComponent_div_41_div_87_tr_15_span_6_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TransactionComponent_div_41_div_87_tr_15_span_7_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TransactionComponent_div_41_div_87_tr_15_span_8_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 63)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c2, ctx_r47.$index == ctx_r47.out_selected));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 7, item_r49.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r49.pub_keys);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r49.is_spent === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r49.minimum_sigs !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r49.global_index);
} }
function TransactionComponent_div_41_div_87_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56)(1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransactionComponent_div_41_div_87_div_17_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r55.outputsLimit = ctx_r55.outputsLimit + 100; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Load more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r48.outputsLimit, " items shown of ", ctx_r48.Outputs == null ? null : ctx_r48.Outputs.length, " total ");
} }
function TransactionComponent_div_41_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Outputs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "table", 61)(6, "thead")(7, "tr")(8, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Global index / Multisig id");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, TransactionComponent_div_41_div_87_tr_15_Template, 12, 11, "tr", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, TransactionComponent_div_41_div_87_div_17_Template, 5, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("( ", ctx_r14.Outputs == null ? null : ctx_r14.Outputs.length, " )");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](16, 3, ctx_r14.Outputs, 0, ctx_r14.outputsLimit));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r14.outputsLimit < (ctx_r14.Outputs == null ? null : ctx_r14.Outputs.length));
} }
const _c3 = function (a0, a1) { return { unconfirmed: a0, confirmed: a1 }; };
function TransactionComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "table", 17)(5, "tr", 19)(6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Hash");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td")(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "tr")(12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "tr")(18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "tr")(24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "bitNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "tr", 20)(30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Confirmations");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "bitNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "tr", 21)(36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "One-time public key");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "td")(39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "tr")(42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Mixin");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "tr", 22)(47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Extra items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "td", 23)(50, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, TransactionComponent_div_41_li_51_Template, 3, 4, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "tr")(53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "td", 25)(56, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, TransactionComponent_div_41_li_57_Template, 2, 0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, TransactionComponent_div_41_li_58_Template, 3, 4, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, TransactionComponent_div_41_div_59_Template, 22, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, TransactionComponent_div_41_div_60_Template, 24, 13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 28)(62, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, " Inputs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "table", 31)(67, "thead")(68, "tr")(69, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Image / Multisig id");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Mixin count");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Global Index");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, TransactionComponent_div_41_tr_78_Template, 15, 10, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](79, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](80, TransactionComponent_div_41_div_80_Template, 5, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "app-dialog", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("visibleChange", function TransactionComponent_div_41_Template_app_dialog_visibleChange_81_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r57.showDialogMixinCount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](84, "moneyParse");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, TransactionComponent_div_41_div_86_Template, 3, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](87, TransactionComponent_div_41_div_87_Template, 18, 7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.Transaction == null ? null : ctx_r1.Transaction.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 20, ctx_r1.Transaction == null ? null : ctx_r1.Transaction.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 22, ctx_r1.Transaction == null ? null : ctx_r1.Transaction.fee));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 24, ctx_r1.Transaction == null ? null : ctx_r1.Transaction.blob_size), " bytes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](34, _c3, ctx_r1.unconfirmed === true, ctx_r1.unconfirmed === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 26, ctx_r1.confirmations));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.Transaction == null ? null : ctx_r1.Transaction.pub_key);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ExtraItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.attachments);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.attachments);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.unconfirmed === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.keeperBlock >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("( ", ctx_r1.Inputs == null ? null : ctx_r1.Inputs.length, " )");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](79, 28, ctx_r1.Inputs, 0, ctx_r1.inputsLimit));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.inputsLimit < (ctx_r1.Inputs == null ? null : ctx_r1.Inputs.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", ctx_r1.showDialogMixinCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Global Index mixins(", ctx_r1.mixinCount, ") for amount ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](84, 32, ctx_r1.connection == null ? null : ctx_r1.connection.amount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.connection == null ? null : ctx_r1.connection.global_indexes);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.Outputs == null ? null : ctx_r1.Outputs.length);
} }
function TransactionComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Transaction not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class TransactionComponent extends _subscription_tracker_subscription_tracker__WEBPACK_IMPORTED_MODULE_0__.SubscriptionTracker {
    constructor(route, httpService, router, mobileNavState) {
        super();
        this.route = route;
        this.httpService = httpService;
        this.router = router;
        this.mobileNavState = mobileNavState;
        this.Transaction = {};
        this.showDialogMixinCount = false;
        this.inputsLimit = 10;
        this.outputsLimit = 10;
        this.searchIsOpen = false;
        // Get Connect Transaction
        this.getConnectTransaction = (connection) => {
            this.connection = connection;
            this.i = 1;
            this.mixinCount = connection.global_indexes.length;
            this.httpService
                .getConnectTransaction(this.connection.amount, this.i)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1))
                .subscribe({
                next: (data) => {
                    this.ConnectTransaction = data;
                },
                error: (err) => console.error(err)
            });
        };
        // Click Mixin Count (inside pop-up)
        this.SetIndexItem = (index) => {
            this.currentIndex = index;
            this.httpService
                .getConnectTransaction(this.connection.amount, this.currentIndex)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1))
                .subscribe({
                next: (data) => {
                    this.ConnectTransaction = data;
                    this.link = this.ConnectTransaction.tx_id;
                    this.router.navigate(['/transaction', this.link], {
                        relativeTo: this.route
                    });
                    this.showDialogMixinCount = false;
                },
                error: (err) => console.error(err)
            });
        };
        this.transactionNotFount = false;
        this.navBlockchain = document.getElementById('blockchain-li');
        this.navBlockchainMobile = document.getElementById('blockchain-mobile-li');
        this.navIsOpen = false;
    }
    onIsVisible($event) {
        this.searchIsOpen = $event;
    }
    getInfoPrepare(data) {
        this.info = data;
        if (this.info) {
            this.height = this.info.height;
            this.posDifficulty = this.info.pos_difficulty;
            this.powDifficulty = this.info.pow_difficulty;
            this.totalCoins = this.info.total_coins;
            this.txCount = this.info.tx_count;
            this.NetworkHashrate = this.info.current_network_hashrate_350;
        }
    }
    ngOnInit() {
        this.navBlockchain.classList.add('active');
        this.navBlockchainMobile.classList.add('active');
        this.getInfoPrepare(this.route.snapshot.data['MainInfo']);
        this._track(this.route.params.subscribe((params) => {
            this.tx_hash = params['tx_hash'];
            this._track(this.httpService.getTransaction(params.tx_hash).subscribe({
                next: (data) => {
                    this.Transaction = data;
                    this.keeperBlock = this.Transaction.keeper_block;
                    if (this.keeperBlock >= 0) {
                        // transaction confirmed
                        this.unconfirmed = false;
                        this.confirmations =
                            this.info.height - this.keeperBlock;
                        this.blockHash = this.Transaction.block_hash;
                        this.blockTimestamp =
                            this.Transaction.block_timestamp;
                        this.ExtraItem = JSON.parse(this.Transaction.extra);
                        // Inputs
                        this.Inputs = JSON.parse(this.Transaction.ins);
                        for (let inConn of this.Inputs) {
                            let amount = inConn.amount.toString();
                            let multisig = inConn.multisig_count;
                            if (parseInt(amount, 10) !== 0 &&
                                multisig > 0) {
                                this.ImageMultisig = 1;
                            }
                            else if (parseInt(amount, 10) !== 0 &&
                                multisig === 0) {
                                this.ImageMultisig = 2;
                            }
                            else if (parseInt(amount, 10) === 0) {
                                this.ImageMultisig = 3;
                            }
                        }
                        // Outputs
                        this.Outputs = JSON.parse(this.Transaction.outs);
                        if (this.Transaction.attachments) {
                            this.attachments = JSON.parse(this.Transaction.attachments);
                        }
                    }
                    else if (this.keeperBlock === -1) {
                        // transaction unconfirmed
                        this.unconfirmed = true;
                        this.confirmations = 0;
                        this.ExtraItem = this.Transaction.extra;
                        this.Inputs = this.Transaction.ins;
                        this.Outputs = this.Transaction.outs;
                    }
                    else {
                        this.router.navigate(['/'], {
                            relativeTo: this.route
                        });
                    }
                    this.transactionNotFount = false;
                },
                error: (err) => (this.transactionNotFount = true),
                complete: () => { }
            }));
        }), this.httpService.subscribeInfo().subscribe((data) => {
            this.getInfoPrepare(data);
        }), this.mobileNavState.change.subscribe((navIsOpen) => {
            this.navIsOpen = navIsOpen;
        }));
    }
    // Global Index Click
    goToTransaction(connection) {
        this.connection = connection;
        this.currentIndex = this.connection.global_indexes[0];
        this.httpService
            .getConnectTransaction(this.connection.amount, this.currentIndex)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1))
            .subscribe({
            next: (data) => {
                this.ConnectTransaction = data;
                this.link = this.ConnectTransaction.tx_id;
                this.router.navigate(['/transaction', this.link], {
                    relativeTo: this.route
                });
                this.showDialogMixinCount = false;
            },
            error: (err) => console.error(err)
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.navBlockchain.classList.remove('active');
        this.navBlockchainMobile.classList.remove('active');
    }
}
TransactionComponent.ɵfac = function TransactionComponent_Factory(t) { return new (t || TransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.MobileNavState)); };
TransactionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TransactionComponent, selectors: [["app-transaction"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 44, vars: 24, consts: [["class", "top_box", 4, "ngIf"], [1, "main_info"], [1, "height"], [1, "title"], [1, "value"], [1, "difficulty"], [1, "pos"], [1, "pow"], [1, "coins_emitted"], [1, "transactions"], [1, "hash_rate"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "top_box"], [1, "left_box"], [1, "back_btn", 3, "routerLink", "ngClass"], [3, "isVisible"], [1, "transaction_details"], [1, "title_transaction"], [1, "hash"], [3, "ngClass"], [1, "one_time_public_key"], [1, "extra_items"], [1, "value_extra_item"], [4, "ngFor", "ngForOf"], [1, "value_attachment"], [4, "ngIf"], ["class", "wrapper_table", 4, "ngIf"], [1, "wrapper_table"], [1, "table_title"], [1, "tr_count"], [1, "fixed_table", "transaction_inputs_table"], [1, "_amount"], [1, "_image_multisig"], [1, "_mixin_count"], [1, "_global_index"], ["class", "box_load_more", 4, "ngIf"], [3, "visible", "visibleChange"], [1, "dialog_title"], [1, "wrap_content"], [3, "click", 4, "ngFor", "ngForOf"], ["class", "is_extra_item", 4, "ngIf"], [1, "is_extra_item"], [1, "unconfirmed_transaction"], [1, "fixed_table", "table_unconfirmed_transaction"], [1, "_hash"], [1, "_height"], [1, "_timestamp"], [1, "fixed_table", "table_confirmed_transaction"], [3, "routerLink"], ["href", "", 4, "ngIf"], ["class", "has_indexes", 3, "click", 4, "ngIf"], ["class", "has-indexes", 3, "click", 4, "ngIf"], ["href", ""], [1, "has_indexes", 3, "click"], [1, "has-indexes", 3, "click"], [1, "box_load_more"], [1, "title_load_more"], ["type", "button", 3, "click"], [3, "click"], [1, "emulation_link"], [1, "fixed_table", "transaction_outputs_table"], [1, "_key"], [1, "_global_index_multisig"], [3, "class", 4, "ngFor", "ngForOf"], [1, "not-found"]], template: function TransactionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TransactionComponent_div_0_Template, 5, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5)(9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Difficulty");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 4)(12, "div", 6)(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "PoS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "PoW:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 8)(23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Coins Emitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "moneyParse");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 9)(30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "bitNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 10)(36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Hash Rate (aprox):");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](40, "hashPowerConverter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, TransactionComponent_div_41_Template, 88, 37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, TransactionComponent_ng_template_42_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.navIsOpen === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 9, ctx.height));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 11, ctx.posDifficulty));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 13, ctx.powDifficulty));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 15, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 17, ctx.totalCoins)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 19, ctx.txCount + ctx.height));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](40, 21, ctx.NetworkHashrate, "speed"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.transactionNotFount === false)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DialogComponent], pipes: [app_pipes_pipe__WEBPACK_IMPORTED_MODULE_4__.BitNumberPipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_4__.MoneyParsePipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_4__.HashPowerConverterPipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_4__.DateFormatPipe, app_pipes_pipe__WEBPACK_IMPORTED_MODULE_4__.UtcPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe], styles: [".transaction_details[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.transaction_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n+1) {\n  background-color: #263163;\n}\n.transaction_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: rgba(35, 78, 226, 0.1);\n}\n.transaction_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.confirmed[_ngcontent-%COMP%] {\n  background-color: #0e5311;\n}\n.transaction_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.unconfirmed[_ngcontent-%COMP%] {\n  background-color: #ff5252;\n}\n@media (max-width: 761px) {\n  .transaction_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.hash[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    white-space: normal;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    word-break: break-all;\n    line-break: strict;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n    line-height: 1.4;\n  }\n}\n@media (max-width: 761px) {\n  .transaction_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.one_time_public_key[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    white-space: normal;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    word-break: break-all;\n    line-break: strict;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n    line-height: 1.4;\n  }\n}\n@media (max-width: 761px) {\n  .transaction_details[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr.extra_items[_ngcontent-%COMP%]   .value_extra_item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    display: block;\n    white-space: normal;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    word-break: break-all;\n    line-break: strict;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n    line-height: 1.4;\n  }\n}\n.transaction_details[_ngcontent-%COMP%]   .title_transaction[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  font-size: 28px;\n  font-weight: 300;\n  color: #fff;\n}\n.transaction_details[_ngcontent-%COMP%]   .value_extra_item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .transaction_details[_ngcontent-%COMP%]   .value_attachment[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 5px 0;\n  white-space: normal;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-all;\n  line-break: strict;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n.transaction_details[_ngcontent-%COMP%]   .value_extra_item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .is_extra_item[_ngcontent-%COMP%], .transaction_details[_ngcontent-%COMP%]   .value_attachment[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .is_extra_item[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 20px;\n  padding-top: 10px;\n}\n@media (max-width: 761px) {\n  .transaction_details[_ngcontent-%COMP%]   .value_extra_item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .is_extra_item[_ngcontent-%COMP%], .transaction_details[_ngcontent-%COMP%]   .value_attachment[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .is_extra_item[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n}\n.table_confirmed_transaction[_ngcontent-%COMP%], .transaction_inputs_table[_ngcontent-%COMP%], .transaction_outputs_table[_ngcontent-%COMP%], .table_unconfirmed_transaction[_ngcontent-%COMP%] {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  overflow: hidden;\n}\n.table_confirmed_transaction[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n+1), .transaction_inputs_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n+1), .transaction_outputs_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n+1), .table_unconfirmed_transaction[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n+1) {\n  background-color: rgba(35, 78, 226, 0.1);\n}\n.table_confirmed_transaction[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n), .transaction_inputs_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n), .transaction_outputs_table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n), .table_unconfirmed_transaction[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: #263163 !important;\n}\n.wrapper_table[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n@media (max-width: 575px) {\n  .wrapper_table[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n}\n.wrapper_table[_ngcontent-%COMP%]   .table_title[_ngcontent-%COMP%] {\n  display: flex;\n}\n.wrapper_table[_ngcontent-%COMP%]   .table_title[_ngcontent-%COMP%]   .unconfirmed_transaction[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #e06a6a;\n  background-color: transparent;\n  font-size: 15px;\n  color: #e06a6a;\n  padding: 6px 24px;\n  border-radius: 12px;\n  margin-left: 15px;\n}\n.wrapper_table[_ngcontent-%COMP%]   .table_title[_ngcontent-%COMP%]   .tr_count[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n@media (max-width: 575px) {\n  .wrapper_table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    width: 545px;\n  }\n}\n.wrapper_table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.wrapper_table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.wrapper_table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: rgba(35, 78, 226, 0.1);\n}\n.wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._hash[_ngcontent-%COMP%] {\n  width: 65%;\n}\n@media (max-width: 991px) {\n  .wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._hash[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    display: block;\n    width: 270px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n}\n@media (max-width: 991px) and (max-width: 761px) {\n  .wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._hash[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    width: 230px;\n  }\n}\n.wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._height[_ngcontent-%COMP%] {\n  width: 15%;\n}\n@media (max-width: 991px) {\n  .wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._height[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n}\n@media (max-width: 761px) {\n  .wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._height[_ngcontent-%COMP%] {\n    width: 22%;\n  }\n}\n.wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._timestamp[_ngcontent-%COMP%] {\n  width: 20%;\n}\n@media (max-width: 991px) {\n  .wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._timestamp[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n.wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._amount[_ngcontent-%COMP%] {\n  width: 15%;\n}\n.wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._image_multisig[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._image_multisig[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  white-space: normal;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-all;\n  line-break: strict;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n@media (max-width: 991px) {\n  .wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._image_multisig[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n}\n.wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._mixin_count[_ngcontent-%COMP%] {\n  width: 15%;\n}\n.wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._mixin_count[_ngcontent-%COMP%]   .has_indexes[_ngcontent-%COMP%] {\n  color: #68a1ff;\n  cursor: pointer;\n}\n@media (max-width: 991px) {\n  .wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._mixin_count[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n}\n@media (max-width: 761px) {\n  .wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._mixin_count[_ngcontent-%COMP%] {\n    width: 22%;\n  }\n}\n.wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._global_index[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._global_index[_ngcontent-%COMP%]   .has-indexes[_ngcontent-%COMP%] {\n  color: #68a1ff;\n  cursor: pointer;\n}\n@media (max-width: 991px) {\n  .wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._global_index[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n.wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._key[_ngcontent-%COMP%] {\n  width: 65%;\n}\n@media (max-width: 991px) {\n  .wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._key[_ngcontent-%COMP%] {\n    width: 55%;\n  }\n}\n@media (max-width: 761px) {\n  .wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._key[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n}\n@media (max-width: 991px) {\n  .wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._key[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: block;\n    white-space: normal;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    word-break: break-all;\n    line-break: strict;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n}\n.wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._global_index_multisig[_ngcontent-%COMP%] {\n  width: 20%;\n}\n@media (max-width: 991px) {\n  .wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._global_index_multisig[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n@media (max-width: 991px) and (max-width: 761px) {\n  .wrapper_table[_ngcontent-%COMP%]   table.fixed_table[_ngcontent-%COMP%]   ._global_index_multisig[_ngcontent-%COMP%] {\n    width: 36%;\n  }\n}\n.wrapper_table[_ngcontent-%COMP%]   .box_load_more[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 122px;\n}\n.wrapper_table[_ngcontent-%COMP%]   .box_load_more[_ngcontent-%COMP%]   .title_load_more[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 14px;\n}\n.wrapper_table[_ngcontent-%COMP%]   .box_load_more[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #212f6c, #212f6c);\n  border-radius: 10px;\n  white-space: nowrap;\n  text-transform: uppercase;\n  color: #fff;\n  font-size: 14px;\n  border: none;\n  padding: 5px 25px;\n  margin-top: 15px;\n  transition: 0.2s;\n}\n.wrapper_table[_ngcontent-%COMP%]   .box_load_more[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to bottom, #212f6c, #26367a);\n}\n.dialog_title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n  font-weight: 300;\n  padding-bottom: 38px;\n  white-space: normal;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-all;\n  line-break: strict;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n@media (max-width: 575px) {\n  .wrap_content[_ngcontent-%COMP%] {\n    padding: 0 15px;\n  }\n}\n.wrap_content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  color: #68a1ff;\n}\n.wrap_content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .emulation_link[_ngcontent-%COMP%] {\n  color: #68a1ff;\n  cursor: pointer;\n  white-space: normal;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-all;\n  line-break: strict;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vYXNzZXRzL3N0eWxlcy9iYXNlL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFBO0FBQUo7QUFHWTtFQUNJLHlCQUFBO0FBRGhCO0FBR1k7RUFDSSx3Q0FBQTtBQURoQjtBQUdZO0VBQ0kseUJBQUE7QUFEaEI7QUFHWTtFQUNJLHlCQUFBO0FBRGhCO0FDK0RJO0VEMURZO0lBRVEsY0FBQTtJQ2ZwQixtQkFBQTtJQUNBLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7SUFFQSxhQUFBO0lEVW9CLGdCQUFBO0VBSXRCO0FBQ0Y7QUNpREk7RURqRFk7SUFFUSxjQUFBO0lDeEJwQixtQkFBQTtJQUNBLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7SUFFQSxhQUFBO0lEbUJvQixnQkFBQTtFQVN0QjtBQUNGO0FDbUNJO0VEdENvQjtJQUVRLGNBQUE7SUNuQzVCLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtJQUVBLGFBQUE7SUQ4QjRCLGdCQUFBO0VBWTlCO0FBQ0Y7QUFMSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBT1I7QUFGUTs7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQ3hEUixtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0FEOERKO0FBWFk7O0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFjaEI7QUNKSTtFRGJROztJQUtRLGNBQUE7RUFpQmxCO0FBQ0Y7QUFaQTs7OztFQUlJLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQWVKO0FBYlE7Ozs7RUFDSSx3Q0FBQTtBQWtCWjtBQWhCUTs7OztFQUNJLG9DQUFBO0FBcUJaO0FBakJBO0VBQ0ksbUJBQUE7QUFvQko7QUM3Qkk7RURRSjtJQUdRLGdCQUFBO0VBc0JOO0FBQ0Y7QUFyQkk7RUFDSSxhQUFBO0FBdUJSO0FBdEJRO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBd0JaO0FBdEJRO0VBQ0ksaUJBQUE7QUF3Qlo7QUNwREk7RUQrQkE7SUFFUSxZQUFBO0VBdUJWO0FBQ0Y7QUF0QlE7RUFDSSwwQ0FBQTtBQXdCWjtBQXBCZ0I7RUFDSSxtQkFBQTtBQXNCcEI7QUFwQmdCO0VBQ0ksd0NBQUE7QUFzQnBCO0FBbEJRO0VBQ0ksbUJBQUE7QUFvQlo7QUFuQlk7RUFDSSxVQUFBO0FBcUJoQjtBQ3BGSTtFRDhEUTtJQUdRLFVBQUE7RUF1QmxCO0VBdEJrQjtJQUNJLGNBQUE7SUFDQSxZQUFBO0lDMUlwQixnQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RURtS0Y7QUFDRjtBQzFGSTtFRDREZ0I7SUFLUSxZQUFBO0VBNkIxQjtBQUNGO0FBekJZO0VBQ0ksVUFBQTtBQTJCaEI7QUN4R0k7RUQ0RVE7SUFHUSxVQUFBO0VBNkJsQjtBQUNGO0FDdkdJO0VEc0VRO0lBTVEsVUFBQTtFQStCbEI7QUFDRjtBQTdCWTtFQUNJLFVBQUE7QUErQmhCO0FDckhJO0VEcUZRO0lBR1EsVUFBQTtFQWlDbEI7QUFDRjtBQS9CWTtFQUNJLFVBQUE7QUFpQ2hCO0FBL0JZO0VBQ0ksVUFBQTtBQWlDaEI7QUFoQ2dCO0VDaktaLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUVBLGFBQUE7QURvTUo7QUMxSUk7RUQ4RlE7SUFNUSxVQUFBO0VBMENsQjtBQUNGO0FBeENZO0VBQ0ksVUFBQTtBQTBDaEI7QUF6Q2dCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUEyQ3BCO0FDdEpJO0VEdUdRO0lBT1EsVUFBQTtFQTRDbEI7QUFDRjtBQ3JKSTtFRGlHUTtJQVVRLFVBQUE7RUE4Q2xCO0FBQ0Y7QUE1Q1k7RUFDSSxVQUFBO0FBOENoQjtBQTdDZ0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQStDcEI7QUN2S0k7RURvSFE7SUFPUSxVQUFBO0VBZ0RsQjtBQUNGO0FBOUNZO0VBQ0ksVUFBQTtBQWdEaEI7QUMvS0k7RUQ4SFE7SUFHUSxVQUFBO0VBa0RsQjtBQUNGO0FDOUtJO0VEd0hRO0lBTVEsVUFBQTtFQW9EbEI7QUFDRjtBQ3pMSTtFRHNJWTtJQUVRLGNBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7SUFFQSxhQUFBO0VBcUR0QjtBQUNGO0FBbERZO0VBQ0ksVUFBQTtBQW9EaEI7QUN6TUk7RURvSlE7SUFHUSxVQUFBO0VBc0RsQjtBQUNGO0FDeE1JO0VEOElRO0lBS1ksVUFBQTtFQXlEdEI7QUFDRjtBQXBESTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBc0RSO0FBckRRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUF1RFo7QUFyRFE7RUFDSSx3REFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXVEWjtBQXREWTtFQUNJLHdEQUFBO0FBd0RoQjtBQWxEQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQ2hRQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0FEc1RKO0FDaFBJO0VEc0xKO0lBRVEsZUFBQTtFQTZETjtBQUNGO0FBNURJO0VBQ0ksY0FBQTtBQThEUjtBQTdEUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VDM1FSLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUVBLGFBQUE7QUQyVUoiLCJmaWxlIjoidHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzL2Jhc2UvbWl4aW5zJztcbi50cmFuc2FjdGlvbl9kZXRhaWxzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIHRhYmxlIHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4gKyAxKSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMjYzMTYzLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDJuKSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMjM0ZWUyLCAwLjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5jb25maXJtZWQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzBlNTMxMSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLnVuY29uZmlybWVkIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNmZjUyNTIsIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmhhc2gge1xuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXg3NjEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0ZXh0V3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLm9uZV90aW1lX3B1YmxpY19rZXkge1xuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXg3NjEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0ZXh0V3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmV4dHJhX2l0ZW1zIHtcbiAgICAgICAgICAgICAgICAudmFsdWVfZXh0cmFfaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgID4gbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0ZXh0V3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRpdGxlX3RyYW5zYWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAwO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC52YWx1ZV9leHRyYV9pdGVtLFxuICAgIC52YWx1ZV9hdHRhY2htZW50IHtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgICAgICBAaW5jbHVkZSB0ZXh0V3JhcDtcbiAgICAgICAgICAgIC5pc19leHRyYV9pdGVtIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXg3NjEge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4udGFibGVfY29uZmlybWVkX3RyYW5zYWN0aW9uLFxuLnRyYW5zYWN0aW9uX2lucHV0c190YWJsZSxcbi50cmFuc2FjdGlvbl9vdXRwdXRzX3RhYmxlLFxuLnRhYmxlX3VuY29uZmlybWVkX3RyYW5zYWN0aW9uIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGJvZHkgdHIge1xuICAgICAgICAmOm50aC1jaGlsZCgybiArIDEpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzIzNGVlMiwgMC4xKTtcbiAgICAgICAgfVxuICAgICAgICAmOm50aC1jaGlsZCgybikge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMjYzMTYzLCAxKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuLndyYXBwZXJfdGFibGUge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgQGluY2x1ZGUgbWF4NTc1IHtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICB9XG4gICAgLnRhYmxlX3RpdGxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLnVuY29uZmlybWVkX3RyYW5zYWN0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwNmE2YTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgY29sb3I6ICNlMDZhNmE7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMjRweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAudHJfY291bnQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGFibGUge1xuICAgICAgICBAaW5jbHVkZSBtYXg1NzUge1xuICAgICAgICAgICAgd2lkdGg6IDU0NXB4O1xuICAgICAgICB9XG4gICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgMC41KTtcbiAgICAgICAgfVxuICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4pIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMjM0ZWUyLCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmZpeGVkX3RhYmxlIHtcbiAgICAgICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgICAgICAgICAuX2hhc2gge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4OTkxIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgPiBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdGV4dC10cnVuY2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLl9oZWlnaHQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4OTkxIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4NzYxIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuX3RpbWVzdGFtcCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXg5OTEge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5fYW1vdW50IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLl9pbWFnZV9tdWx0aXNpZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICA+IHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0ZXh0V3JhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4OTkxIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuX21peGluX2NvdW50IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgICAgICAgIC5oYXNfaW5kZXhlcyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjhhMWZmO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDk5MSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMiU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLl9nbG9iYWxfaW5kZXgge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgICAgLmhhcy1pbmRleGVzIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2OGExZmY7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbWF4OTkxIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuX2tleSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXg5OTEge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXg3NjEge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+IHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXg5OTEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtYnJlYWs6IHN0cmljdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgaHlwaGVuczogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5fZ2xvYmFsX2luZGV4X211bHRpc2lnIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDk5MSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1heDc2MSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzYlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5ib3hfbG9hZF9tb3JlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTIycHg7XG4gICAgICAgIC50aXRsZV9sb2FkX21vcmUge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgPiBidXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzIxMmY2YywgIzIxMmY2Yyk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMjEyZjZjLCAjMjYzNjdhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRpYWxvZ190aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcGFkZGluZy1ib3R0b206IDM4cHg7XG4gICAgQGluY2x1ZGUgdGV4dFdyYXA7XG59XG4ud3JhcF9jb250ZW50IHtcbiAgICBAaW5jbHVkZSBtYXg1NzUge1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgfVxuICAgID4gZGl2IHtcbiAgICAgICAgY29sb3I6ICM2OGExZmY7XG4gICAgICAgIC5lbXVsYXRpb25fbGluayB7XG4gICAgICAgICAgICBjb2xvcjogIzY4YTFmZjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRleHRXcmFwO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQG1peGluIHRleHQtdHJ1bmNhdGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBtaXhpbiB0ZXh0V3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgbGluZS1icmVhazogc3RyaWN0O1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xufVxuQG1peGluIGNvdmVyQm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuQG1peGluIGFicygkdG9wOiBhdXRvLCAkcmlnaHQ6IGF1dG8sICRib3R0b206IGF1dG8sICRsZWZ0OiBhdXRvKSB7XG4gICAgdG9wOiAkdG9wO1xuICAgIHJpZ2h0OiAkcmlnaHQ7XG4gICAgYm90dG9tOiAkYm90dG9tO1xuICAgIGxlZnQ6ICRsZWZ0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbkBtaXhpbiBjb3ZlckltZyB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG5AbWl4aW4gdmFsaW5nQm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuQG1peGluIHVuU2VsZWN0IHtcbiAgICAtd2Via2l0LXRvdWNoLWNvbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5AbWl4aW4gY2xlYXJmaXgge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbn1cbkBtaXhpbiBtYXgxMTk5IHtcbiAgICAvLyBtYWtldCAxMTcxXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbWF4MTE3MCB7XG4gICAgLy8gbWFrZXRzIDk5MlxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTcwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1heDk5MSB7XG4gICAgLy8gbWFrZXRzIDc2MlxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5AbWl4aW4gbWF4NzYxIHtcbiAgICAvLyBtYWtldHMgNTc2XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2MXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiBtYXg1NzUge1xuICAgIC8vIG1ha2V0cyA0MDBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuQG1peGluIG1vYmlsZSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM5OXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbkBtaXhpbiB0cmlhbmdsZVVwKCR3OiAyMHB4LCAkaDogMjBweCwgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyOiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAkaCBzb2xpZCAkY29sb3I7XG59XG5AbWl4aW4gdHJpYW5nbGVEb3duKCR3OiAyMHB4LCAkaDogMjBweCwgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWxlZnQ6ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogJHcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogJGggc29saWQgJGNvbG9yO1xufVxuQG1peGluIHRyaWFuZ2xlTGVmdCgkdzogMjBweCwgJGg6IDIwcHgsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206ICR3IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogJGggc29saWQgJGNvbG9yO1xufVxuQG1peGluIHRyaWFuZ2xlUmlnaHQoJHc6IDIwcHgsICRoOiAyMHB4LCAkY29sb3I6IHJlZCkge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAkdyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogJGggc29saWQgJGNvbG9yO1xufVxuQG1peGluIHRyaWFuZ2xlVG9wTGVmdCgkdzogMjBweCwgJGg6IDIwcHgsICRjb2xvcjogcmVkKSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6ICR3IHNvbGlkICRjb2xvcjtcbiAgICBib3JkZXItcmlnaHQ6ICRoIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuQG1peGluIHBhcmFsbGVsb2dyYW0oJHc6IDE1MHB4LCAkaDogMTAwcHgsICRza2V3OiAyMGRlZywgJGNvbG9yOiByZWQpIHtcbiAgICB3aWR0aDogJHc7XG4gICAgaGVpZ2h0OiAkaDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygkc2tldyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNrZXcoJHNrZXcpO1xuICAgIC1vLXRyYW5zZm9ybTogc2tldygkc2tldyk7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yO1xuICAgID4gc3BhbixcbiAgICBhLFxuICAgIGFkZHJlc3Mge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtJHNrZXcpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2tldygtJHNrZXcpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHNrZXcoLSRza2V3KTtcbiAgICB9XG59XG5AbWl4aW4gYm90dG9tTGluZSgkaDogOHB4LCAkY29sb3I6ICMwMGI5YmYpIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogJGg7XG59XG5AbWl4aW4gY2VudGVyLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5AbWl4aW4gaWNvQ2VudGVyIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5AbWl4aW4gcHNldWRvKCRkaXNwbGF5OiBibG9jaywgJHBvczogYWJzb2x1dGUsICRjb250ZW50OiAnJykge1xuICAgIGNvbnRlbnQ6ICRjb250ZW50O1xuICAgIGRpc3BsYXk6ICRkaXNwbGF5O1xuICAgIHBvc2l0aW9uOiAkcG9zO1xufVxuQG1peGluIGJhcnRibG9jayB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMyMzRlZTIsIDAuMSk7XG59XG4iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    backend: 'http://127.0.0.1:8008',
    documentionApi: 'https://docs.zano.org'
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 1356,
	"./ta.js": 1356,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map