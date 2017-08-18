webpackJsonp([4],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* Profile */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* Profile */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* Profile */]
        ]
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return expand; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(207);

var expand = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* trigger */])('expand', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* style */])({
        maxHeight: '10em',
        opacity: '1',
        padding: '',
        border: '',
        minHeight: '',
        transition: 'all 250ms cubic-bezier(0.420, 0.000, 0.580, 1.000)'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* style */])({
        maxHeight: '0',
        opacity: '.7',
        padding: '0',
        border: 'none',
        minHeight: '0',
        transition: 'all 250ms cubic-bezier(0.420, 0.000, 0.580, 1.000)'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* transition */])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])('0s')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* transition */])('* <=> *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* animate */])('250ms ease-in-out'))
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_store__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_log__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_animations__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var Profile = (function () {
    function Profile(nav, navParams, alert, translate, loadingCtrl, store, log) {
        this.nav = nav;
        this.navParams = navParams;
        this.alert = alert;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.store = store;
        this.log = log;
        this.loading = this.loadingCtrl.create();
        this.schedules = [];
        this.selectedSchedule = {
            type: '',
            schedule: []
        };
        this.missing = [];
        this.showMissing = false;
        this.birth = '';
        this.studentName = '';
        this.grade = '';
        this.familyCredit = 0.00;
        this.studentCredit = 0.00;
        this.personImage = './assets/placeholder.jpg';
        this.attendance = [];
        this.discipline = [];
    }
    Profile.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var login, missing, schedules, img, records, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.present()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 8, , 9]);
                        return [4 /*yield*/, this.store.get('LOGIN')];
                    case 3:
                        login = (_a.sent()) || {};
                        this.birth = (login.birthdate || '').replace(/-/ig, ' ');
                        this.studentName = login.person_name;
                        this.grade = login.grade;
                        this.familyCredit = parseFloat(login.credit_family || '0');
                        this.studentCredit = parseFloat(login.credit_student || '0');
                        return [4 /*yield*/, this.store.get('MISSING')];
                    case 4:
                        missing = _a.sent();
                        this.missing = missing.missing;
                        return [4 /*yield*/, this.store.get('SCHEDULES')];
                    case 5:
                        schedules = _a.sent();
                        this.lang = this.translate.currentLang;
                        this.schedules = schedules;
                        this.selectedSchedule = schedules[0] || {};
                        return [4 /*yield*/, this.store.get('IMAGE')];
                    case 6:
                        img = _a.sent();
                        this.personImage = img ? "data:image/jpeg;base64," + img : './assets/placeholder.jpg';
                        return [4 /*yield*/, this.store.get('RECORDS')];
                    case 7:
                        records = _a.sent();
                        this.attendance = records.attendance;
                        this.discipline = records.discipline;
                        return [3 /*break*/, 9];
                    case 8:
                        err_1 = _a.sent();
                        this.log.error(err_1);
                        return [3 /*break*/, 9];
                    case 9:
                        this.loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    Profile.prototype.toggleSchedule = function () {
        var _this = this;
        var inputs = this.schedules.map(function (el) { return ({
            type: 'radio',
            label: el[_this.lang],
            value: el.type,
            checked: el.type === _this.selectedSchedule.type
        }); });
        this.alert.create({
            title: this.translate.instant('PROFILE.SELECT_SCHEDULE'),
            buttons: [
                this.translate.instant('GLOBAL.CANCEL'),
                {
                    text: this.translate.instant('GLOBAL.OK'),
                    handler: function (type) {
                        _this.selectedSchedule = _this.schedules.find(function (schedule) { return schedule.type === type; });
                    }
                }
            ],
            inputs: inputs
        }).present();
    };
    Profile.prototype.toggleMissing = function () {
        this.showMissing = !this.showMissing;
    };
    Profile.prototype.goSelected = function (opts) {
        this.nav.push('Records', opts);
    };
    Profile.prototype.goGrades = function () {
        this.nav.setRoot('Grades');
    };
    return Profile;
}());
Profile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'PROFILE.NAME\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-lg-5 offset-lg-1 col-md-6 col-sm-12 col-12>\n        <ion-card>\n          <ion-item class="dark-gray" [@expand]="!!grade">\n            <ion-row>\n              <ion-col col-5 col-sm-5 col-md-4 col-lg-3>\n                <ion-avatar>\n                  <img [src]="personImage">\n                </ion-avatar>\n              </ion-col>\n              <ion-col col-7 col-sm-7 col-md-8 col-lg-9 class="person-col">\n                <span class="person">\n                  {{ studentName }}\n                  <br>\n                  {{ birth }}\n                  <br>\n                  {{ grade }}\n                  <sup>\n                    {{ \'PROFILE.TH\' | translate }}\n                  </sup>\n                  &nbsp;\n                  {{ \'PROFILE.GRADE\' | translate }}\n                </span>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="person" item-left></ion-icon>\n            {{ \'PROFILE.STUDENT_CREDIT\' | translate }}\n            <ion-badge item-right>{{ studentCredit | currency:\'USD\':true:\'1.2-2\' }}</ion-badge>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="people" item-left></ion-icon>\n            {{ \'PROFILE.FAMILY_CREDIT\' | translate }}\n            <ion-badge item-right>{{ familyCredit | currency:\'USD\':true:\'1.2-2\' }}</ion-badge>\n          </ion-item>\n          <button ion-item (click)="goSelected({ attendance: attendance })">\n            <ion-icon name="alarm" color="danger" item-left></ion-icon>\n            {{ \'RECORDS.ATTENDANCE\' | translate }}\n            <ion-badge color="danger" item-right>{{ attendance.length }}</ion-badge>\n          </button>\n          <button ion-item (click)="goSelected({ discipline: discipline })">\n            <ion-icon name="checkmark-circle" color="danger" item-left></ion-icon>\n            {{ \'RECORDS.DISCIPLINE\' | translate }}\n            <ion-badge color="danger" item-right>{{ discipline.length }}</ion-badge>\n          </button>\n        </ion-card>\n\n        <ion-card class="card-fab">\n          <button class="fab-top-right" ion-fab (click)="toggleMissing()">\n            {{ missing.length }}\n          </button>\n          <ion-card-header>\n            {{ \'PROFILE.MISSING_ASSSIGNMENTS\' | translate }}\n          </ion-card-header>\n          <ion-list>\n            <ion-item\n              text-wrap\n              *ngFor="let item of missing"\n              [@expand]="showMissing"\n              class="alternate-colors"\n            >\n              <ion-label>\n                {{ item.calc_date }}\n                <br>\n                <strong>{{ item.calc_class }}: </strong>\n                {{ item.gra_name }}\n                <br>\n                <strong>{{ \'PROFILE.WORTH\' | translate }}: </strong> {{ item.gra_points }} {{ \'PROFILE.POINTS\' | translate }}\n              </ion-label>\n              <ion-checkbox color="primary"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n          <button ion-item color="secondary" (click)="goGrades()">\n            {{ \'PROFILE.CHECK_GRADES\' | translate }}\n          </button>\n        </ion-card>\n      </ion-col>\n      <ion-col col-lg-5 col-md-6 col-sm-12 col-12>\n        <ion-card class="card-fab">\n          <button class="fab-top-right" ion-fab (click)="toggleSchedule()">\n            <ion-icon name="swap"></ion-icon>\n          </button>\n\n          <ion-card-header>\n            {{ \'PROFILE.SCHEDULE\' | translate }} | {{ selectedSchedule[lang] }}\n          </ion-card-header>\n          <ion-list>\n            <ion-item *ngFor="let item of selectedSchedule.schedule" class="alternate-colors">\n              <ion-row>\n                <ion-col>\n                  {{ item.period }}\n                </ion-col>\n                <ion-col>\n                  {{ item.begin }}\n                  <br>\n                  {{ item.end }}\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/obedm503/projects/ncai-developers/studentaccess/src/pages/profile/profile.html"*/,
        animations: [__WEBPACK_IMPORTED_MODULE_5__components_animations__["a" /* expand */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_4__providers_log__["a" /* Log */]])
], Profile);

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=4.js.map