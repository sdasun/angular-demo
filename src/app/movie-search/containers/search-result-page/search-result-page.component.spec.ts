// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { StoreModule } from '@ngrx/store';
// import { MockStore, provideMockStore } from '@ngrx/store/testing';

// import { SearchResultPageComponent } from './search-result-page.component';

// describe('SearchResultPageComponent', () => {
//   let component: SearchResultPageComponent;
//   let fixture: ComponentFixture<SearchResultPageComponent>;

//   beforeEach(async () => {
//     let store: MockStore;
//     await TestBed.configureTestingModule({
//       declarations: [SearchResultPageComponent],
//       imports: [RouterTestingModule],
//       providers: [provideMockStore({
//         initialState:
//         {
//           search: {
//             loaded: false,
//             loading: false,
//             query: ''
//           },
//           selectedItem: {
//             loaded: false,
//             loading: false,
//           },
//         }
//       })]
//     })
//       .compileComponents();

//     store = TestBed.inject(MockStore);
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SearchResultPageComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
