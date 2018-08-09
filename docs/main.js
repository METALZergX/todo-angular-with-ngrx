(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/filter.action.ts":
/*!******************************************!*\
  !*** ./src/app/actions/filter.action.ts ***!
  \******************************************/
/*! exports provided: FILTER, SetFilterAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER", function() { return FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFilterAction", function() { return SetFilterAction; });
var FILTER = Object.freeze({ FILTER: 'FILTER_LIST' }).FILTER;
var SetFilterAction = /** @class */ (function () {
    function SetFilterAction(payload) {
        this.payload = payload;
        this.type = FILTER;
    }
    return SetFilterAction;
}());



/***/ }),

/***/ "./src/app/actions/todo.action.ts":
/*!****************************************!*\
  !*** ./src/app/actions/todo.action.ts ***!
  \****************************************/
/*! exports provided: ADD_TODO, STATUS_TODO, EDIT_TODO, DELETE_TODO, CHECK_ALL, CLEAN_CHECKED, AddToDoAction, ChangeStatusAction, UpdateToDoAction, DeleteToDoAction, CheckedAllAction, CleanCompletedAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_TODO", function() { return STATUS_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_TODO", function() { return EDIT_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_TODO", function() { return DELETE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_ALL", function() { return CHECK_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_CHECKED", function() { return CLEAN_CHECKED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToDoAction", function() { return AddToDoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeStatusAction", function() { return ChangeStatusAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateToDoAction", function() { return UpdateToDoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteToDoAction", function() { return DeleteToDoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckedAllAction", function() { return CheckedAllAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanCompletedAction", function() { return CleanCompletedAction; });
//import { Action } from '@ngrx/store';
var ADD_TODO = (_a = Object.freeze({
    ADD_TODO: 'ADD_TODO', STATUS_TODO: 'STATUS_TODO', EDIT_TODO: 'EDIT_TODO', DELETE_TODO: 'DELETE_TODO', CHECK_ALL: 'CHECK_ALL', CLEAN_CHECKED: 'CLEAN_CHECKED'
}), _a.ADD_TODO), STATUS_TODO = _a.STATUS_TODO, EDIT_TODO = _a.EDIT_TODO, DELETE_TODO = _a.DELETE_TODO, CHECK_ALL = _a.CHECK_ALL, CLEAN_CHECKED = _a.CLEAN_CHECKED;
var AddToDoAction = /** @class */ (function () {
    function AddToDoAction(payload) {
        this.payload = payload;
        this.type = ADD_TODO;
    }
    return AddToDoAction;
}());

var ChangeStatusAction = /** @class */ (function () {
    function ChangeStatusAction(payload) {
        this.payload = payload;
        this.type = STATUS_TODO;
    }
    return ChangeStatusAction;
}());

var UpdateToDoAction = /** @class */ (function () {
    function UpdateToDoAction(payload) {
        this.payload = payload;
        this.type = EDIT_TODO;
    }
    return UpdateToDoAction;
}());

var DeleteToDoAction = /** @class */ (function () {
    function DeleteToDoAction(payload) {
        this.payload = payload;
        this.type = DELETE_TODO;
    }
    return DeleteToDoAction;
}());

var CheckedAllAction = /** @class */ (function () {
    function CheckedAllAction(payload) {
        this.payload = payload;
        this.type = CHECK_ALL;
    }
    return CheckedAllAction;
}());

var CleanCompletedAction = /** @class */ (function () {
    function CleanCompletedAction() {
        this.type = CLEAN_CHECKED;
    }
    return CleanCompletedAction;
}());

var _a;


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"todoapp\">\n  <app-todo></app-todo>\n</section>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _interfaces_todo_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interfaces/todo.interface */ "./src/app/interfaces/todo.interface.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _todo_todos_list_todos_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo/todos-list/todos-list.component */ "./src/app/todo/todos-list/todos-list.component.ts");
/* harmony import */ var _todo_todos_item_todos_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo/todos-item/todos-item.component */ "./src/app/todo/todos-item/todos-item.component.ts");
/* harmony import */ var _todo_filter_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo/filter/filter.component */ "./src/app/todo/filter/filter.component.ts");
/* harmony import */ var _todo_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todo/todo-add/todo-add.component */ "./src/app/todo/todo-add/todo-add.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pipes_filter_list_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/filter-list.pipe */ "./src/app/pipes/filter-list.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// NgRx Modules config

//import { toDoReducer } from './reducers/todo.reducer';

//import { FormsModule } from "@angular/forms";

// Components App








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_7__["TodoComponent"],
                _todo_todos_list_todos_list_component__WEBPACK_IMPORTED_MODULE_8__["TodosListComponent"],
                _todo_todos_item_todos_item_component__WEBPACK_IMPORTED_MODULE_9__["TodosItemComponent"],
                _todo_filter_filter_component__WEBPACK_IMPORTED_MODULE_10__["FilterComponent"],
                _todo_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_11__["TodoAddComponent"],
                _pipes_filter_list_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterListPipe"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_interfaces_todo_interface__WEBPACK_IMPORTED_MODULE_5__["ReducerInterface"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/interfaces/todo.interface.ts":
/*!**********************************************!*\
  !*** ./src/app/interfaces/todo.interface.ts ***!
  \**********************************************/
/*! exports provided: ReducerInterface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducerInterface", function() { return ReducerInterface; });
/* harmony import */ var _reducers_filter_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/filter.reducer */ "./src/app/reducers/filter.reducer.ts");
/* harmony import */ var _reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/todo.reducer */ "./src/app/reducers/todo.reducer.ts");


// Definicion de Reducers para el StoreModule
var ReducerInterface = {
    todos: _reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_1__["toDoReducer"],
    filters: _reducers_filter_reducer__WEBPACK_IMPORTED_MODULE_0__["filterReducer"]
};


/***/ }),

/***/ "./src/app/pipes/filter-list.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/filter-list.pipe.ts ***!
  \*******************************************/
/*! exports provided: FilterListPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterListPipe", function() { return FilterListPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterListPipe = /** @class */ (function () {
    function FilterListPipe() {
    }
    FilterListPipe.prototype.transform = function (tasks, filter) {
        switch (filter) {
            case 'COMPLETED':
                return tasks.filter(function (task) { return task.status; });
            case 'ACTIVE':
                return tasks.filter(function (task) { return !task.status; });
            default:
                return tasks;
        }
    };
    FilterListPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterListPipe'
        })
    ], FilterListPipe);
    return FilterListPipe;
}());



/***/ }),

/***/ "./src/app/reducers/filter.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/reducers/filter.reducer.ts ***!
  \********************************************/
/*! exports provided: filterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterReducer", function() { return filterReducer; });
/* harmony import */ var _actions_filter_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/filter.action */ "./src/app/actions/filter.action.ts");

function filterReducer(state, action) {
    if (state === void 0) { state = 'ALL'; }
    switch (action.type) {
        case _actions_filter_action__WEBPACK_IMPORTED_MODULE_0__["FILTER"]:
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/todo.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/todo.reducer.ts ***!
  \******************************************/
/*! exports provided: toDoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDoReducer", function() { return toDoReducer; });
/* harmony import */ var _actions_todo_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/todo.action */ "./src/app/actions/todo.action.ts");
/* harmony import */ var _todo_models_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo/models/todo.model */ "./src/app/todo/models/todo.model.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
//import { Action } from '@ngrx/store';


function toDoReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_0__["ADD_TODO"]:
            return state.concat([new _todo_models_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"](action.payload)]);
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_0__["STATUS_TODO"]:
            return state.map(function (task) {
                return (task.id === action.payload) ? __assign({}, task, { status: !task.status }) : task;
            });
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_0__["EDIT_TODO"]:
            return state.map(function (task) {
                return (task.id === action.payload.id) ? __assign({}, task, { text: action.payload.title }) : task;
            });
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_TODO"]:
            return state.filter(function (task) { return task.id !== action.payload; });
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_0__["CHECK_ALL"]:
            return state.map(function (task) {
                return __assign({}, task, { status: action.payload });
            });
        case _actions_todo_action__WEBPACK_IMPORTED_MODULE_0__["CLEAN_CHECKED"]:
            return state.filter(function (task) { return !task.status; });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/todo/filter/filter.component.html":
/*!***************************************************!*\
  !*** ./src/app/todo/filter/filter.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <span class=\"todo-count\"><strong>{{ pendingTasks }}</strong> item left</span>\n  <ul class=\"filters\">\n    <li *ngFor=\"let filter of listFilters\" (click)=\"changeFilter(filter)\"><a [ngClass]=\"{ 'selected': filter === actuallyFilter }\">{{ filter }}</a></li>\n  </ul>\n  <button (click)=\"cleanAllCompleted()\" class=\"clear-completed\">Clear completed</button>\n</footer>\n\n<!--\n  <li><a class=\"selected\" href=\"#/\">All</a></li>\n  <li><a href=\"#/active\">Active</a></li>\n  <li><a href=\"#/completed\">Completed</a></li>\n-->"

/***/ }),

/***/ "./src/app/todo/filter/filter.component.ts":
/*!*************************************************!*\
  !*** ./src/app/todo/filter/filter.component.ts ***!
  \*************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _actions_filter_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/filter.action */ "./src/app/actions/filter.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_todo_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/todo.action */ "./src/app/actions/todo.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilterComponent = /** @class */ (function () {
    function FilterComponent(store) {
        this.store = store;
        this.pendingTasks = 0;
        this.listFilters = ['ALL', 'ACTIVE', 'COMPLETED'];
    }
    FilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.subscribe(function (state) {
            _this.actuallyFilter = state.filters;
            _this.countPendingTask(state.todos);
        });
    };
    FilterComponent.prototype.changeFilter = function (filter) {
        this.store.dispatch(new _actions_filter_action__WEBPACK_IMPORTED_MODULE_1__["SetFilterAction"](filter));
    };
    FilterComponent.prototype.countPendingTask = function (Tasks) {
        this.pendingTasks = Tasks.filter(function (task) { return !task.status; }).length;
    };
    FilterComponent.prototype.cleanAllCompleted = function () {
        this.store.dispatch(new _actions_todo_action__WEBPACK_IMPORTED_MODULE_3__["CleanCompletedAction"]());
    };
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/todo/filter/filter.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/todo/models/todo.model.ts":
/*!*******************************************!*\
  !*** ./src/app/todo/models/todo.model.ts ***!
  \*******************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(textTask) {
        this.textTask = textTask;
        this.id = Math.floor(Math.random() * 10000) + 1;
        this.text = textTask;
        this.status = false;
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/todo/todo-add/todo-add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-add/todo-add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <h1>todos</h1>\n  <input class=\"new-todo\" placeholder=\"What needs to be done?\" [formControl]=\"taskInput\" (keyup.enter)=\"addTask()\" autofocus>\n</header>"

/***/ }),

/***/ "./src/app/todo/todo-add/todo-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/todo/todo-add/todo-add.component.ts ***!
  \*****************************************************/
/*! exports provided: TodoAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoAddComponent", function() { return TodoAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_todo_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/todo.action */ "./src/app/actions/todo.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoAddComponent = /** @class */ (function () {
    function TodoAddComponent(store) {
        this.store = store;
    }
    TodoAddComponent.prototype.ngOnInit = function () {
        this.taskInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    };
    TodoAddComponent.prototype.addTask = function () {
        if (this.taskInput.valid && this.taskInput.value.trim()) {
            this.store.dispatch(new _actions_todo_action__WEBPACK_IMPORTED_MODULE_3__["AddToDoAction"](this.taskInput.value.trim()));
            this.taskInput.setValue('');
        }
    };
    TodoAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-add',
            template: __webpack_require__(/*! ./todo-add.component.html */ "./src/app/todo/todo-add/todo-add.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TodoAddComponent);
    return TodoAddComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-todo-add></app-todo-add>\n<section class=\"main\">\n  <input id=\"toggle-all\" class=\"toggle-all\" type=\"checkbox\">\n  <label (click)=\"checkAllTask()\" for=\"toggle-all\">Mark all as complete</label>\n  <app-todos-list></app-todos-list>\n</section>\n<app-filter></app-filter>"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_todo_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/todo.action */ "./src/app/actions/todo.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoComponent = /** @class */ (function () {
    function TodoComponent(store) {
        this.store = store;
        this.checkedAllState = false;
    }
    TodoComponent.prototype.ngOnInit = function () { };
    TodoComponent.prototype.checkAllTask = function () {
        this.checkedAllState = !this.checkedAllState;
        this.store.dispatch(new _actions_todo_action__WEBPACK_IMPORTED_MODULE_2__["CheckedAllAction"](this.checkedAllState));
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/todo/todos-item/todos-item.component.html":
/*!***********************************************************!*\
  !*** ./src/app/todo/todos-item/todos-item.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- editing / completed -->\n<li [ngClass]=\"{ 'completed': toDo.status, 'editing': flagEdit }\">\n  <div class=\"view\">\n    <input class=\"toggle\" type=\"checkbox\" [formControl]=\"checkedToDo\" [checked]=\"toDo.status\">\n    <label (dblclick)=\"editTask()\">{{ toDo.text }}</label>\n    <button (click)=\"deleteTask()\" class=\"destroy\"></button>\n  </div>\n  <input class=\"edit\" [value]=\"toDo.text\" [formControl]=\"inputEditToDo\" (blur)=\"blurTask()\" #editFieldView>\n</li>"

/***/ }),

/***/ "./src/app/todo/todos-item/todos-item.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/todo/todos-item/todos-item.component.ts ***!
  \*********************************************************/
/*! exports provided: TodosItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosItemComponent", function() { return TodosItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/todo.model */ "./src/app/todo/models/todo.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_todo_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/todo.action */ "./src/app/actions/todo.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodosItemComponent = /** @class */ (function () {
    function TodosItemComponent(store) {
        this.store = store;
    }
    TodosItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkedToDo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.toDo.status);
        this.inputEditToDo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.toDo.text, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.checkedToDo.valueChanges.subscribe(function (value) {
            console.log(value);
            console.log(_this.toDo);
            _this.store.dispatch(new _actions_todo_action__WEBPACK_IMPORTED_MODULE_4__["ChangeStatusAction"](_this.toDo.id));
        });
    };
    TodosItemComponent.prototype.editTask = function () {
        var _this = this;
        this.flagEdit = true;
        setTimeout(function (_) { return _this.editField.nativeElement.select(); }, 2);
    };
    TodosItemComponent.prototype.blurTask = function () {
        this.flagEdit = false;
        if (this.inputEditToDo.valid && this.inputEditToDo.value.trim()) {
            var newTitleToDo = this.inputEditToDo.value;
            this.store.dispatch(new _actions_todo_action__WEBPACK_IMPORTED_MODULE_4__["UpdateToDoAction"]({ id: this.toDo.id, title: newTitleToDo.trim() }));
        }
    };
    TodosItemComponent.prototype.deleteTask = function () {
        this.store.dispatch(new _actions_todo_action__WEBPACK_IMPORTED_MODULE_4__["DeleteToDoAction"](this.toDo.id));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"])
    ], TodosItemComponent.prototype, "toDo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editFieldView'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TodosItemComponent.prototype, "editField", void 0);
    TodosItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todos-item',
            template: __webpack_require__(/*! ./todos-item.component.html */ "./src/app/todo/todos-item/todos-item.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], TodosItemComponent);
    return TodosItemComponent;
}());



/***/ }),

/***/ "./src/app/todo/todos-list/todos-list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/todo/todos-list/todos-list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"todo-list\">\n  <app-todos-item *ngFor=\"let task of toDoList | filterListPipe: filterInitial\" [toDo]=\"task\"></app-todos-item>\n</ul>"

/***/ }),

/***/ "./src/app/todo/todos-list/todos-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/todo/todos-list/todos-list.component.ts ***!
  \*********************************************************/
/*! exports provided: TodosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosListComponent", function() { return TodosListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosListComponent = /** @class */ (function () {
    function TodosListComponent(store) {
        this.store = store;
        this.toDoList = [];
    }
    TodosListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.subscribe(function (state) {
            _this.toDoList = state.todos;
            _this.filterInitial = state.filters;
        });
    };
    TodosListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todos-list',
            template: __webpack_require__(/*! ./todos-list.component.html */ "./src/app/todo/todos-list/todos-list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TodosListComponent);
    return TodosListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/administrador/Documents/REDUX/ngrx-angular/todo-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map