class abeGame extends Phaser.Scene {
    constructor() {
        super('abeGame');
    }
    
    preload(){
        this.load.path = './assets/';
        this.load.image('studio', 'STUDIO.jpg');

        //this.load.path = './assets';
        this.load.image('scene1', 'scene1.png');
        this.load.image('scene2', 'scene2.PNG');
        this.load.image('scene3', 'scene3 (1).png');
    }
    create(){
        this.studio = this.add.image(
            screen.width/2,//x
            screen.height/2,//y
            'studio',//imagename
        )
        this.studio.setScale(0.8) //resize

        //this.studio.onclick = test;
        
        this.tweens.add({
            targets: this.studio,
            alpha:0,
            duration: 1000,
            ease: 'Linear',
            //repeat: -1,
        });
        
        this.scene1 = this.add.image(
            screen.width/2,//x
            screen.height/2,//y
            'scene1',//imagename
        )
        this.scene1.alpha = 0;

        this.tweens.add({
            targets: this.scene1,
            alpha:1,
            duration: 2000,
            ease: 'Linear',
            yoyo: true,

            //repeat: -1,
        });



        this.scene2 = this.add.image(
            screen.width/2,//x
            screen.height/2,//y
            'scene2',//imagename
        )
        this.scene2.alpha = 0;

        this.tweens.add({
            targets: this.scene2,
            alpha:1,
            duration: 8000,
            ease: 'Linear',
            yoyo: true,

            //repeat: -1,
        });

        this.scene3 = this.add.image(
            screen.width/2,//x
            screen.height/2,//y
            'scene3',//imagename
        )
        this.scene3.alpha = 0;

        

        this.tweens.add({
            targets: this.scene3, 
            alpha:1,
            duration: 8000,
            ease: 'Linear',
            yoyo: true,

            //repeat: -1,
        });

        //var timeline = scene.tweens.createTimeline();

        this.textObject = this.add.text(
            0, //x
            0,//y
            "College is hard \nSo we made a pretty bad art/game demo thing for it \nHave anoter line to fullfil requirements", //text
            {
                font: "40px Arial",
                color: "black",
                alpha: 0,
            } //style

            
        );

        this.tweens.add({
            targets: this.textObject, 
            //alpha:1,
            x:screen.width,
            y:0,
            duration: 8000,
            ease: 'Linear',
            yoyo: true,

            repeat: -1,
        });
        
    }
    update(){
        
    }

    
}



let config = {
    type: Phaser.WEBGL,
    width: screen.width,
    height: screen.height,
    backgroundColor: 0xFFFFFF,
    scene: [abeGame],

}

let game = new Phaser.Game(config);