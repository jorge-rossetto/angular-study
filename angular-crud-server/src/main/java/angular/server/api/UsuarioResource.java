package angular.server.api;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import angular.server.domain.Usuario;
import angular.server.domain.UsuarioRepository;

@Path("/usuario")
public class UsuarioResource {

    @Inject
    private UsuarioRepository usuarioRepository;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void create(Usuario usuario) {
        System.out.println("POST - usuario = " + usuario);
        usuarioRepository.create(usuario);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Usuario> readAll() {
        System.out.println("GET");
        return usuarioRepository.readAll();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Usuario readById(@PathParam("id") Long id) {
        System.out.println("GET - id = " + id);
        return usuarioRepository.readById(id);
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void update(Usuario usuario) {
        System.out.println("PUT - usuario = " + usuario);
        usuarioRepository.update(usuario);
    }
    
    @DELETE
    @Path("/{id}")
    public void delete(@PathParam("id") Long id) {
        System.out.println("DELETE - id = " + id);
        usuarioRepository.delete(id);
    }

}