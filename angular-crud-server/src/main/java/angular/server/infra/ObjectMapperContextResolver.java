package angular.server.infra;

import javax.ws.rs.ext.ContextResolver;
import javax.ws.rs.ext.Provider;

import com.fasterxml.jackson.databind.ObjectMapper;

@Provider
public class ObjectMapperContextResolver implements ContextResolver<ObjectMapper> {  
    private final ObjectMapper mapper;

    public ObjectMapperContextResolver() {
        mapper = new ObjectMapper();
        
        // nem preciso mais dessa classe pra configurar as datas! deixei aqui soh pra ver ela vazia e comemorar :D
        
//        mapper.registerModule(new JavaTimeModule());
//        mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
    }
    
    @Override
    public ObjectMapper getContext(Class<?> type) {
        return mapper;
    }  
    
    public ObjectMapper getObjectMapper() {
        return mapper;
    }
}
