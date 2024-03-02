abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;

  getReelTime(): number {
    //some complex calculations
    return 34;
  }
}

class Instagram2 extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Called Sepia function!!");
  }
}

const danielCamera = new Instagram2("portrait", "black and white", 5);

export {};
