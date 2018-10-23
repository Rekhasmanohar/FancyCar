package org.rekha.cars.fancycars;

import java.util.LinkedList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.rekha.cars.fancycars.Model.Car;
import org.rekha.cars.fancycars.Model.CarAvailability;
import org.rekha.cars.fancycars.Model.CarInitializer;


@Path("data")
public class CarAvailabilityDetailsWS {
	
	@GET
	@Path("/availability/{id}")
    @Produces(MediaType.APPLICATION_JSON)
	public CarAvailability getValueById(@PathParam("id") int id) {
		return CarAvailability.checkStock(id);
	}
	
	static LinkedList<Car> returnAllCars;
	
	@GET
	@Path("/cars")
	@Produces(MediaType.APPLICATION_JSON)
	public LinkedList<Car> getAllCarsDetails() {
		if(returnAllCars==null) {
		returnAllCars=CarInitializer.getAllCars();
		}
		return returnAllCars;
	}
}
