//#include <SoftwareSerial.h>
//SoftwareSerial mySerial(4, 5);

/*
  AnalogReadSerial
  Reads an analog input on pin 0, prints the result to the serial monitor.
  Graphical representation is available using serial plotter (Tools > Serial Plotter menu)
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.
*/
#define my_Serial Serial //Use soft serial ports 4 and 5.

#define distanceSensor A0

//#define my_Serial Serial1
String msg = ""; //To define a string.

int emptyCan = 900;
int fullCan = 300;
unsigned long startTime = 0;
unsigned long currTime = 0;
unsigned long elapsedTime = 5000;

// the setup routine runs once when you press reset:
void setup() {
  // Initialize the Bluetooth communication baud rate.
  my_Serial.begin(9600);

  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue = analogRead(distanceSensor);
  // Serial.println(sensorValue);

  // Record current time
  startTime = millis();

  // If the trashcan is full, record that time
  while (sensorValue < fullCan) {
    sensorValue = analogRead(distanceSensor);
    if (millis() - startTime > elapsedTime /* && my_Serial.available() > 0*/) {
      my_Serial.println(1);  //Send data to the other end of Bluetooth communication.
    } else {
      my_Serial.println(0);  //Send data to the other end of Bluetooth communication.
    }
  }

  delay(10);        // delay in between reads for stability
}
