﻿// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //private instance variables+++++++++++++++++
        private _helloLabel: createjs.Text;
        
        //constructor +++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // public methods++++++++++++++++++++++++
        //start method ---- overwrite
        public start(): void {
            console.log("Game Started...");

            this._helloLabel = new createjs.Text("Hello World!", "60px Consolas", "#000000");
            this._helloLabel.regX = this._helloLabel.getMeasuredWidth() * 0.5;
            this._helloLabel.regY = this._helloLabel.getMeasuredHeight() * 0.5;
            this._helloLabel.x = config.Screen.CENTER_X;
            this._helloLabel.y = config.Screen.CENTER_Y;

            this.addChild(this._helloLabel); //this---- scene object
           
            stage.addChild(this);
        }
        
        //Menu Scene updates here
        public update(): void {
            this._helloLabel.rotation += 5;
        }
    }
}