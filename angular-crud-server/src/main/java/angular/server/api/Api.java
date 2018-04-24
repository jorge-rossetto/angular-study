package angular.server.api;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import org.jboss.resteasy.plugins.interceptors.CorsFilter;

@ApplicationPath("api")
public class Api extends Application {

	private Set<Object> singletons = new HashSet<Object>();
	
	private HashSet<Class<?>> classes = new HashSet<Class<?>>();

	public Api() {
		CorsFilter corsFilter = new CorsFilter();
		corsFilter.getAllowedOrigins().add("*");
		corsFilter.setAllowedMethods("OPTIONS, GET, POST, DELETE, PUT, PATCH");
		singletons.add(corsFilter);

		classes.add(UsuarioResource.class);
	}

	@Override
	public Set<Object> getSingletons() {
		return singletons;
	}

	@Override
	public HashSet<Class<?>> getClasses() {
		return classes;
	}

}