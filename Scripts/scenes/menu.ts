// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //private instance variables+++++++++++++++++
        private _helloLabel: createjs.Text;
        private _startButton: objects.Button;
        
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
           
            this._startButton = new objects.Button("StartButon",
                config.Screen.CENTER_X, config.Screen.CENTER_Y + 60)

            this.addChild(this._startButton);
            
            //startbutton event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            stage.addChild(this);
        }
        
        //Menu Scene updates here
        public update(): void {

        }
        
        //event handlers+++++++++++++++++++++
        private _startButtonClick(event:createjs.MouseEvent)
        {
            this._helloLabel.text = "Game Started";
        }
    }
}