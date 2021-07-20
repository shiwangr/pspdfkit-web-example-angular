import { Component } from "@angular/core";
import PSPDFKit from "pspdfkit";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["app.component.css"],
})
export class AppComponent {
  title = "PSPDFKit for Web Angular Example";
  toolbarItemsCustom: any;

  ngAfterViewInit(): void {
    const undoObj = { type: 'undo' };
    const redoObj = { type: 'redo' };
    this.toolbarItemsCustom =  PSPDFKit.defaultToolbarItems;
    this.toolbarItemsCustom.splice(10, 0, undoObj);
    this.toolbarItemsCustom.splice(11, 0, redoObj);
    PSPDFKit.load({
      baseUrl: location.protocol + "//" + location.host + "/assets/",
      document: "/assets/example.pdf",
      container: ".pspdfkit-container",
      toolbarItems: this.toolbarItemsCustom
    }).then((instance) => {
      (<any>window).instance = instance;
    });
  }
}
