import { useState, useCallback } from 'react';

export default function usePropertiesStore() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Property 1",
      subProperties: [
        { id: 11, name: "Sub Property 1.1" },
        { id: 12, name: "Sub Property 1.2" },
      ],
    },
    {
      id: 2,
      name: "Property 2",
      subProperties: [{ id: 21, name: "Sub Property 2.1" }],
    },
  ]);

  const [expandedIds, setExpandedIds] = useState(new Set());

  const toggleExpand = useCallback((id) => {
    setExpandedIds(prevIds => {
      const newIds = new Set(prevIds);
      if (newIds.has(id)) {
        newIds.delete(id);
      } else {
        newIds.add(id);
      }
      return newIds;
    });
  }, []);

  const toggleExpandAll = useCallback(() => {
    setExpandedIds(prevIds => 
      prevIds.size === properties.length ? new Set() : new Set(properties.map(prop => prop.id))
    );
  }, [properties]);

  const addSubProperty = useCallback((propertyId) => {
    setProperties(prevProps => prevProps.map(prop =>
      prop.id === propertyId
        ? {
            ...prop,
            subProperties: [
              ...prop.subProperties,
              {
                id: Date.now(),
                name: `New Sub Property ${prop.subProperties.length + 1}`,
              },
            ],
          }
        : prop
    ));
  }, []);

  const removeSubProperty = useCallback((propertyId, subPropertyId) => {
    setProperties(prevProps => prevProps.map(prop =>
      prop.id === propertyId
        ? {
            ...prop,
            subProperties: prop.subProperties.filter(
              subProp => subProp.id !== subPropertyId
            ),
          }
        : prop
    ));
  }, []);

  return {
    properties,
    expandedIds,
    toggleExpand,
    toggleExpandAll,
    addSubProperty,
    removeSubProperty,
  };
}