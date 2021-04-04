package com.esprit.spring.services;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.esprit.spring.entites.Event;
import com.esprit.spring.entites.EventCategory;
@Service
public interface EventServiceI {
	
	public void addEvent(Event event);
	public List<Event> eventsLists();
	public void updateEvent(Long eid);
	public void deleteEvent(Long id) ;
	public Event findbyId(Long id);
	public Event findEventByName(String name);
	public List<Event> filterEvent(EventCategory category);
	public List<Event> upcomingEvents();
	public List<Event> passedEvents();
	public void refundUsers(Long eid);
	public Map<Long, Integer> bestEventsByViews();
	public List<String> displayBestEventsByParticipations();

}
