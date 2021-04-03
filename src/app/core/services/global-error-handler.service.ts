import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler extends ErrorHandler {
  handleError(error: any): void {
    console.error("GlobalErrorHandler",error);
    super.handleError(error);
  }
}
