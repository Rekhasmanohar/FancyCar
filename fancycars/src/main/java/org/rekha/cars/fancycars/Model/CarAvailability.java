package org.rekha.cars.fancycars.Model;

import java.util.HashMap;
import java.util.Map;

import javax.transaction.xa.XAResource;
import javax.xml.bind.annotation.XmlRootElement;


public class CarAvailability {
	
	public String available;
	
	public CarAvailability() {
		
	}
	
	public CarAvailability(String status) {
		this.available=status;
	}
	
	public  static HashMap<Integer,CarAvailability> carAvailabilityInitializer(HashMap<Integer, CarAvailability> carAvail) {
		carAvail.put(1, new CarAvailability("In Dealership"));
		carAvail.put(2, new CarAvailability("Out of Stock"));
		carAvail.put(3, new CarAvailability("Out of Stock"));
		carAvail.put(4, new CarAvailability("In Dealership"));
		carAvail.put(5, new CarAvailability("Unavailable"));
		carAvail.put(6, new CarAvailability("In Dealership"));
		carAvail.put(7, new CarAvailability("Unavailable"));
		carAvail.put(8, new CarAvailability("In Dealership"));
		carAvail.put(9, new CarAvailability("In Dealership"));
		carAvail.put(10, new CarAvailability("In Dealership"));
		return carAvail;
	}
		public  static CarAvailability checkStock(Integer i) {
			HashMap<Integer,CarAvailability> carAvail=new HashMap<Integer,CarAvailability>();
			carAvailabilityInitializer(carAvail);
			return  carAvail.get(i);
		}
	
	
}
