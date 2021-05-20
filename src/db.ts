
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.ts'
})
export class AppComponent {

  constructor(private storage: Storage) {
  }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }
}
