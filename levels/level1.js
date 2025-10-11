const level1 = new Level(

    [
      new Chicken(this, 0),
      new Chicken(this, 1),
      new Chicken(this, 2),
      new EndBoss()
    ],
    [
        new Clouds(0),
        new Clouds(720),
        new Clouds(1420),
    ],
    [
    new Background("img/5_background/layers/air.png", 0),
    new Background("img/5_background/layers/4_clouds/full.png", 0),
    new Background("img/5_background/layers/3_third_layer/1.png", 0),
    new Background("img/5_background/layers/2_second_layer/1.png", 0),
    new Background("img/5_background/layers/1_first_layer/1.png", 0),

    new Background("img/5_background/layers/air.png", 720),
    new Background("img/5_background/layers/4_clouds/full.png", 720),
    new Background("img/5_background/layers/3_third_layer/2.png", 720),
    new Background("img/5_background/layers/2_second_layer/2.png", 720),
    new Background("img/5_background/layers/1_first_layer/2.png", 720),

    new Background("img/5_background/layers/air.png", 720 * 2),
    new Background("img/5_background/layers/4_clouds/full.png", 720 * 2),
    new Background("img/5_background/layers/3_third_layer/1.png", 720 * 2),
    new Background("img/5_background/layers/2_second_layer/1.png", 720 * 2),
    new Background("img/5_background/layers/1_first_layer/1.png", 720 * 2),
  ]
);