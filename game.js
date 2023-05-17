
class logo extends Phaser.Scene {
    constructor(){
        super('logo');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('logo', 'STUDIO.png');
        this.load.image('scene1', 'scene1.png');
        this.load.image('scene2', 'scene2.PNG');
        this.load.image('scene3', 'scene3 (1).png');
        this.load.audio('demon', 'demon.wav');
        this.load.audio('write', 'write.wav');
    }
    create(){
        this.add.image(960, 540, 'logo');
        this.add.text(700,1000,"Click to continue").setFontSize(40)
        this.input.on('pointerdown', () => this.scene.start('scene1'));
    }
}

class scene1 extends Phaser.Scene {
    constructor(){
        super('scene1');
    }
    create() {
        this.add.image(960, 540, 'scene1');
        this.add.text(700,1000,"Click to continue").setFontSize(40)
        this.textObject = this.add.text(800,40,"Exams").setFontSize(40)
        this.input.on('pointerdown', () => this.scene.start('scene2'));

        this.write = this.sound.add('write');
        this.write.play();

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
}
//d
class scene2 extends Phaser.Scene {
    constructor(){
        super('scene2');
    }
    create() {
        this.add.image(960, 540, 'scene2');
        this.add.text(700,1000,"Click to continue").setFontSize(40)
        this.textObject = this.add.text(550,40,"Paralysis Vision/Insomnia").setFontSize(40)
        this.input.on('pointerdown', () => this.scene.start('scene3'));

        this.demon = this.sound.add('demon');
        this.demon.play();

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
}

class scene3 extends Phaser.Scene {
    constructor(){
        super('scene3');
    }
    create() {
        this.add.image(960, 540, 'scene3');
        this.add.text(700,1000,"Click to continue").setFontSize(40)
        this.textObject = this.add.text(550,40,"Have you had any job experience?\nWhat are your worst qualities?\nWhy should we hire you?").setFontSize(40)
        //this.add.text(550,140,"What are your worst qualities?").setFontSize(40)
        //this.add.text(550,240,"Why should we hire you?").setFontSize(40)
        this.input.on('pointerdown', () => this.scene.start('logo'));


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
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [logo,scene1,scene2,scene3],
    title: "D1",
});

