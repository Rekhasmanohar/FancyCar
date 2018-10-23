package org.rekha.cars.fancycars.Model;

import java.util.LinkedList;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

public class CarInitializer {
	
	private CarInitializer(){
		
	}

	static LinkedList<Car> carType;
	
	public static Car getCarByName(String name) {
		for(Car c:carType) {
			if(c.carName==name)
				return c;
		}
		return null;	

	}
	
	
	
	public static LinkedList<Car> getAllCars() {
		if(carType==null) {
		carType= Car.initializeCars();
		}
		return carType;
	}

	
}
