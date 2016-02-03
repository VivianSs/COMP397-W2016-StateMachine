module objects{
    //Scene Class
    export class Scene extends createjs.Container{
        //constructor+++++++++++++++++++++
        constructor()
        {
            super();
            this.start();
        }
        
        // Add game objetc to my scene in this method
       public start():void
       {
         stage.addChild(this);  
       }
       
       // update game objects in my scene
       public update(): void
       {
           
       }
    }
}