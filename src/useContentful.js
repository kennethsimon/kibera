import { createClient } from "contentful";



export const useClients = () => {
 const client =  createClient({
      space: "jacz0koca7mx",
      accessToken: "5hO0hS8Kiwfvo6bjs9LIwXcku60ZQcMUw9rNUv-suuQ",
      host: "preview.contentful.com"
  });

  const getClients = async () => {
      try {
         const entries = await client.getEntries({
             content_type: 'clients',
             select: 'fields'
         });   
         return entries;
      }catch(error){
        console.log(error)
      }

      
  }
 return {getClients}
}

export const useProjects = () => {
    const client =  createClient({
         space: "jacz0koca7mx",
         accessToken: "5hO0hS8Kiwfvo6bjs9LIwXcku60ZQcMUw9rNUv-suuQ",
         host: "preview.contentful.com"
     });
   
     const getProjects = async () => {
         try {
            const entries = await client.getEntries({
                content_type: 'projects',
                select: 'fields'
            });   
            return entries;
         }catch(error){
           console.log(error)
         }
   
         
     }
   
    return {getProjects}
   }

   export const useProject = () => {
    const client =  createClient({
         space: "jacz0koca7mx",
         accessToken: "5hO0hS8Kiwfvo6bjs9LIwXcku60ZQcMUw9rNUv-suuQ",
         host: "preview.contentful.com"
     });
   
     const getProject = async (projectId) => {
         try {
            const entries = await client.getEntry(projectId);   
            return entries;
         }catch(error){
           console.log(error)
         }
     }
   
    return {getProject}
   }

   export const useCategories = () => {
    const client =  createClient({
         space: "jacz0koca7mx",
         accessToken: "5hO0hS8Kiwfvo6bjs9LIwXcku60ZQcMUw9rNUv-suuQ",
         host: "preview.contentful.com"
     });
   
     const getCategories = async () => {
         try {
            const entries = await client.getEntries({
                content_type: 'categories',
                select: 'fields'
            });   
            return entries;
         }catch(error){
           console.log(error)
         }
   
         
     }
   
    return {getCategories}
   }

   export const useTestimonials = () => {
    const client =  createClient({
         space: "jacz0koca7mx",
         accessToken: "5hO0hS8Kiwfvo6bjs9LIwXcku60ZQcMUw9rNUv-suuQ",
         host: "preview.contentful.com"
     });
   
     const getTestimonials = async () => {
         try {
            const entries = await client.getEntries({
                content_type: 'testimonials',
                select: 'fields'
            });   
            return entries;
         }catch(error){
           console.log(error)
         }
   
         
     }
   
    return {getTestimonials}
   }


   export const useTeams = () => {
    const client =  createClient({
         space: "jacz0koca7mx",
         accessToken: "5hO0hS8Kiwfvo6bjs9LIwXcku60ZQcMUw9rNUv-suuQ",
         host: "preview.contentful.com"
     });
   
     const getTeams = async () => {
         try {
            const entries = await client.getEntries({
                content_type: 'team',
                select: 'fields'
            });   
            return entries;
         }catch(error){
           console.log(error)
         }
   
         
     }
   
    return {getTeams}
   }


