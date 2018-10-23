package org.rekha.cars.fancycars.Model;

import java.util.LinkedList;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Car {
	
	public Car(){	
	}
	
	static LinkedList<Car> carType = new LinkedList<Car>();
	
	public int carId;
	public String carName;
	public String carMake;
	public String carModel;
	public String img;
	
	public  static LinkedList<Car> initializeCars() {
		carType.add(new Car(1, "Benz", "Sedan", "2018", "https://i.gifer.com/en/9W4A"));
		carType.add(new Car(2, "Ferrari",  "Sedan", "2017","https://i.gifer.com/en/9W4A"));
		carType.add(new Car(3, "Aston Martin",  "Sedan", "2019","https://i.gifer.com/en/9W4A"));
		carType.add(new Car(4, "BMW", "Sedan", "2015", "https://i.gifer.com/en/9W4A"));
		carType.add(new Car(5, "Toyota", "Sedan", "2019", "https://i.gifer.com/en/9W4A"));
		carType.add(new Car(6, "Honda",  "Sedan", "2018","https://i.gifer.com/en/9W4A"));
		carType.add(new Car(7, "KIA", "Sedan", "2018", "https://i.gifer.com/en/9W4A"));
		carType.add(new Car(8, "Audi", "Sedan", "2018", "https://i.gifer.com/en/9W4A"));
		carType.add(new Car(9, "Ford",  "Sedan", "2018","https://i.gifer.com/en/9W4A"));
		carType.add(new Car(10, "GM", "Sedan", "2012", "https://i.gifer.com/en/9W4A"));
		return carType;
}
	
	public Car(int carId,String carName,String carMake,String carModel,String img){
		this.carId=carId;
		this.carName=carName;
		this.carMake=carMake;
		this.carModel=carModel;
		this.img=img;
	}
	
}
